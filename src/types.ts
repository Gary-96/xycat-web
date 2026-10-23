/** 定价档位 */
export interface Plan {
  name: string;
  subtitle: string;
  /** 固定价格（如 "$0" / "Custom"）或按月/按年两种展示 */
  price: string | { monthly: string; annual: string };
  popular?: boolean;
  features: string[];
  button: { text: string; link: string };
}
