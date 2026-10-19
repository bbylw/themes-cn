import { useState } from "react";
import { Theme, Switch } from "@radix-ui/themes";

type Band = {
  text: string;
  detail: string;
  color: string;
  ink: string;
  on: boolean;
};

const BANDS: Band[] = [
  {
    text: "无障碍访问，默认达成。",
    detail: "所有交互组件遵循 WAI-ARIA 模式，键盘导航与读屏支持开箱即用。",
    color: "#d51860",
    ink: "#ffffff",
    on: true,
  },
  {
    text: "主题随四处配置而变。",
    detail: "accentColor、grayColor、radius、scaling，四个属性定下全局风格。",
    color: "#1a4be0",
    ink: "#ffffff",
    on: true,
  },
  {
    text: "暗色模式，一行切换。",
    detail: 'appearance="dark" 即完成切换，两套色板都已调好对比度。',
    color: "#0b7a67",
    ink: "#ffffff",
    on: false,
  },
  {
    text: "布局原语，杜绝魔法数字。",
    detail: "Flex、Grid、Container 覆盖常见版式，间距取自统一的刻度。",
    color: "#ffb224",
    ink: "#111111",
    on: false,
  },
  {
    text: "预置样式，深度可定制。",
    detail: "每个组件的样式都可覆盖，主题令牌全部以 CSS 变量开放。",
    color: "#111111",
    ink: "#ffffff",
    on: false,
  },
];

export default function FeatureBands() {
  const [states, setStates] = useState<boolean[]>(BANDS.map((b) => b.on));

  function toggle(i: number, next: boolean) {
    setStates((s) => s.map((v, j) => (j === i ? next : v)));
  }

  return (
    <div className="bands">
      {BANDS.map((b, i) => (
        <div
          key={b.text}
          className={`band${states[i] ? " on" : ""}`}
          data-ui
          style={
            states[i]
              ? { background: b.color, color: b.ink }
              : undefined
          }
        >
          <div className="wrap band-inner">
            <h2>{b.text}</h2>
            <p className="consequence" aria-live="polite">
              {b.detail}
            </p>
            <div className="switch-cell">
              <Theme accentColor={states[i] ? "gray" : "blue"} hasBackground={false}>
                <Switch
                  size="3"
                  checked={states[i]}
                  onCheckedChange={(v) => toggle(i, v)}
                  aria-label={`${b.text}（开或关）`}
                />
              </Theme>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
