// 2026-10-24 - 定价模型由订阅制改为买断制，Plan 结构随之调整：
// 新增 original（划线原价）、period（计费周期）、badge（主推档徽标），
// 移除订阅用的 {monthly, annual} 对象与 subtitle。
export interface Plan {
  name: string;
  tagline: string;
  /** 现价展示值，如 "$149" / "¥999" */
  price: string;
  /** 划线原价，仅在促销档出现 */
  original?: string;
  /** 计费周期，如 "/ 30 Days"；买断档不传 */
  period?: string;
  /** 主推档徽标文案 */
  badge?: string;
  /** 划线优惠提示，如 "Save 50%" */
  saving?: string;
  popular?: boolean;
  features: string[];
  button: { text: string; link: string };
}
