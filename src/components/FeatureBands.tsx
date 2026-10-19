import { useState } from "react";
import type { CSSProperties } from "react";
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
    detail: "遵循 WAI-ARIA，键盘导航与读屏支持开箱即用。",
    color: "#1a4be0",
    ink: "#ffffff",
    on: true,
  },
  {
    text: "主题随四处配置而变。",
    detail: "accentColor、grayColor、radius、scaling 定全局。",
    color: "#0e5a4a",
    ink: "#ffffff",
    on: false,
  },
  {
    text: "暗色模式，一行切换。",
    detail: 'appearance="dark" 即完成切换，两套色板均已调好。',
    color: "#14130f",
    ink: "#f7f4ed",
    on: false,
  },
  {
    text: "布局原语，杜绝魔法数字。",
    detail: "Flex、Grid、Container 统一间距刻度。",
    color: "#e9c45c",
    ink: "#14130f",
    on: false,
  },
  {
    text: "预置样式，深度可定制。",
    detail: "每个组件均可覆盖，主题令牌全部开放。",
    color: "#b93a26",
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
            {
              "--band-color": b.color,
              "--band-ink": b.ink,
            } as CSSProperties
          }
        >
          <div className="wrap band-inner">
            <span className="band-no" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="band-body">
              <h3>{b.text}</h3>
              <div className="band-detail">
                <p>{b.detail}</p>
              </div>
            </div>
            <div className="switch-cell">
              <span className="switch-state" aria-hidden="true">
                {states[i] ? "ON" : "OFF"}
              </span>
              <Theme
                accentColor="gray"
                grayColor="sand"
                hasBackground={false}
              >
                <Switch
                  size="3"
                  checked={states[i]}
                  onCheckedChange={(v) => toggle(i, v)}
                  aria-label={`切换：${b.text}`}
                />
              </Theme>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
