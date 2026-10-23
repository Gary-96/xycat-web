# xycat.com 部署手册（aaPanel + 原生 Nginx 静态站点）

> 目标环境：aaPanel（宝塔国际版），Nginx 静态站点，无 Node 运行时。
> 构建在本地或 CI 完成，服务器只托管 `dist/` 的静态文件。

---

## 0. 前置条件

| 项 | 要求 |
| --- | --- |
| 服务器 | 已安装 aaPanel，Nginx 1.20+ |
| 域名 | `xycat.com`、`www.xycat.com` 的 A 记录已指向服务器 IP |
| 本地 | Node ≥ 22.12、pnpm（或 npm） |
| 端口 | 80 / 443 已放行（云厂商安全组 + aaPanel 防火墙） |

DNS 生效验证：

```bash
dig +short xycat.com
dig +short www.xycat.com
# 两条都应返回服务器公网 IP
```

---

## 1. 本地构建

```bash
cd /path/to/xy-astroship

# 首次：安装依赖
pnpm install

# 配置表单密钥（不配置也能构建，但联系表单只会提示改用邮箱）
cp .env.example .env
# 编辑 .env，填入 PUBLIC_WEB3FORMS_KEY=xxxxx

# 构建
pnpm build
```

产物在 `dist/`：

```
dist/
├── index.html
├── about/index.html
├── pricing/index.html
├── blog/index.html
├── blog/why-we-built-xiyue/index.html
├── contact/index.html
├── 404.html
├── robots.txt
├── sitemap-index.xml
├── sitemap-0.xml
├── favicon.svg
├── opengraph.jpg
└── _astro/            # 带哈希的 css / js / 图片
```

> **注意**：`_astro/` 目录名以下划线开头。部分 FTP 客户端或压缩工具会跳过它，上传后务必确认该目录存在，否则整站无样式。

打包上传：

```bash
cd dist && tar -czf ../xycat-dist.tar.gz . && cd ..
# 生成 ../xycat-dist.tar.gz
```

---

## 2. aaPanel 建站

1. 左侧 **网站** → **添加站点**
2. 填写：
   - 域名：`xycat.com`（第二行填 `www.xycat.com`）
   - 根目录：`/www/wwwroot/xycat.com`
   - FTP / 数据库：**不创建**
   - PHP 版本：**纯静态**（Pure static）
3. 提交。

---

## 3. 上传构建产物

### 方式 A：面板文件管理器（最简单）

1. 进入 **文件** → `/www/wwwroot/xycat.com`
2. 删除面板自动生成的 `index.html`、`404.html`、`.user.ini`
3. 上传 `xycat-dist.tar.gz`
4. 右键 → **解压** → 解压到当前目录
5. 确认根目录下直接是 `index.html`，而不是 `dist/index.html`

### 方式 B：命令行（推荐，可重复）

```bash
# 本地执行
rsync -avz --delete dist/ root@<服务器IP>:/www/wwwroot/xycat.com/

# 服务器上修正权限
ssh root@<服务器IP>
chown -R www:www /www/wwwroot/xycat.com
find /www/wwwroot/xycat.com -type d -exec chmod 755 {} \;
find /www/wwwroot/xycat.com -type f -exec chmod 644 {} \;
```

---

## 4. 配置 Nginx

aaPanel 已生成基础 vhost，路径：

```
/www/server/panel/vhost/nginx/xycat.com.conf
```

**不要整份替换**——面板的 SSL 配置块、伪静态 include 都在里面，替换后证书续期与面板功能会失效。

正确做法：

1. 打开 `deploy/nginx-xycat.com.conf`
2. 复制 `CUSTOM BLOCK START` 到 `CUSTOM BLOCK END` 之间的内容（含两行标记）
3. 粘贴到 aaPanel vhost 的 `server { }` 内部，放在 `include enable-php-xx.conf;` 之后、`#SSL-START` 之前
4. 面板 **网站 → 设置 → 配置文件** 里保存（用面板编辑器改，不要用 vim 改后不重载）
5. 重载：

```bash
nginx -t && nginx -s reload
```

`nginx -t` 必须返回 `syntax is ok` / `test is successful`。

---

## 5. 开启 SSL 与强制 HTTPS

1. **网站 → 设置 → SSL** → **Let's Encrypt** → 勾选 `xycat.com` 与 `www.xycat.com` → 申请
2. 申请成功后打开 **强制 HTTPS**
3. 确认面板写入的 `#SSL-START ... #SSL-END` 块未被破坏

> 证书续期依赖 `/.well-known/acme-challenge/` 可访问，我们的配置已显式放行该路径。若续期失败，先检查这里。

---

## 6. 验证清单

逐条执行，全部通过才算部署完成。

```bash
# 1. 首页 200 且标题正确
curl -sI https://xycat.com/ | head -1
curl -s https://xycat.com/ | grep -o '<title>[^<]*</title>'
# 期望：HTTP/2 200 ; <title>XIYUE — Creator AI Tools</title>

# 2. www 跳主域（301，且只跳一次）
curl -sI https://www.xycat.com/ | grep -iE '^(HTTP|location)'
# 期望：301 ; location: https://xycat.com/

# 3. HTTP 跳 HTTPS
curl -sI http://xycat.com/ | grep -iE '^(HTTP|location)'
# 期望：301 ; location: https://xycat.com/

# 4. 内页与目录斜杠
curl -sI https://xycat.com/pricing | grep -iE '^(HTTP|location)'
# 期望：301 -> /pricing/
curl -sI https://xycat.com/pricing/ | head -1
# 期望：200

# 5. 404 返回真实 404 状态码（不能是 200）
curl -sI https://xycat.com/no-such-page/ | head -1
# 期望：404

# 6. 静态资源与缓存头
curl -sI https://xycat.com/_astro/$(ls dist/_astro | grep '\.css$' | head -1) | grep -i cache-control
# 期望：public, max-age=31536000, immutable

# 7. robots 与 sitemap
curl -s https://xycat.com/robots.txt
curl -sI https://xycat.com/sitemap-index.xml | head -1
# 期望：Sitemap 指向 https://xycat.com/sitemap-index.xml ；sitemap 200

# 8. 安全头
curl -sI https://xycat.com/ | grep -iE 'x-content-type-options|x-frame-options|referrer-policy'
```

浏览器侧再确认：

- [ ] 页面样式正常（说明 `_astro/` 上传完整）
- [ ] favicon 是黑底白 X
- [ ] 移动端菜单可展开
- [ ] `/contact` 表单提交后出现成功提示（或未配密钥时出现邮箱兜底提示）

---

## 7. 常见问题

| 现象 | 原因 | 处理 |
| --- | --- | --- |
| 页面无样式，控制台 `_astro/*.css` 404 | 上传时漏了 `_astro` 目录 | 重新上传，注意以 `_` 开头的目录 |
| 访问 `/about` 报 403 | 目录无 `index.html` 或权限不对 | 检查 `dist/about/index.html` 是否存在；`chown -R www:www` |
| 所有页面 404 | 根目录设成了 `.../dist` 而不是 `.../dist` 的内容 | 根目录下应直接有 `index.html` |
| 改版后仍是旧页面 | HTML 缓存 | 我们已设 `max-age=0, must-revalidate`；若仍旧，检查是否被 CDN 缓存 |
| `www` 无限跳转 | 面板「强制 HTTPS」与 vhost 里 `if ($host = www...)` 冲突 | 保留其一，建议保留 vhost 规则并关闭面板强制跳转 |
| Let's Encrypt 续期失败 | `/.well-known` 被拦截 | 确认配置里的 acme-challenge location 未被删除 |
| 表单提交报错 | `PUBLIC_WEB3FORMS_KEY` 未配置 | 见下节 |

---

## 8. 联系表单密钥

表单走 [Web3Forms](https://web3forms.com)：

1. 用 `hello@xycat.com` 注册，获取 access key
2. 本地 `.env` 写入 `PUBLIC_WEB3FORMS_KEY=xxxxx`
3. **重新构建**并重新上传 `dist/`

> 该变量是构建期注入的（`PUBLIC_` 前缀会进前端产物），改完必须重新 build，改服务器环境变量无效。
> 未配置时表单不会发请求，直接提示访客改用邮箱——不会静默丢线索，但也没有收集能力。

---

## 9. 日常更新流程

```bash
# 1. 改内容 / 改代码
# 2. 本地预览
pnpm dev

# 3. 构建并上传
pnpm build
rsync -avz --delete dist/ root@<服务器IP>:/www/wwwroot/xycat.com/

# 4. 无需重启 nginx（静态文件直接生效）
```

改 Nginx 配置时才需要 `nginx -t && nginx -s reload`。

---

## 10. 回滚

站点文件建议在服务器上保留一份上一版：

```bash
# 部署前备份
ssh root@<服务器IP> "cd /www/wwwroot && tar -czf xycat-backup-$(date +%F-%H%M).tar.gz xycat.com"

# 回滚
ssh root@<服务器IP> "cd /www/wwwroot && rm -rf xycat.com && tar -xzf xycat-backup-<时间>.tar.gz"
```

代码侧的回滚用 Git：`git log --oneline` 找到基线提交 `chore: baseline before XIYUE rebrand`，可完整回到模板状态。
