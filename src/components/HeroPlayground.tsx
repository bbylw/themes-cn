import { useState } from "react";
import { Theme, Switch } from "@radix-ui/themes";
import LabeledSlider from "./LabeledSlider";

export default function HeroPlayground() {
  const [weight, setWeight] = useState(800);
  const [tracking, setTracking] = useState(-2); // 单位 0.01em
  const [accent, setAccent] = useState(true);

  return (
    <Theme accentColor="indigo" grayColor="sand" radius="medium" hasBackground={false}>
      <div className="hero-stage">
        <h1
          id="hero-title"
          className="hero-head"
          style={{
            fontWeight: weight,
            letterSpacing: `${tracking / 100}em`,
          }}
        >
          <span className="line-mask m1">
            <span>写组件，</span>
          </span>
          <span className="line-mask m2">
            <span className={accent ? "accent-line" : undefined}>
              不必写样式。
            </span>
          </span>
        </h1>

        <div className="chip c1" data-ui>
          <div className="chip-head">
            <span className="chip-no">01</span>
            <span className="chip-label">
              字重 <em>weight</em>
            </span>
            <span className="readout">{weight}</span>
          </div>
          <LabeledSlider
            label="标题字重"
            value={[weight]}
            onValueChange={(v) => setWeight(v[0])}
            min={400}
            max={900}
            step={100}
            size="2"
          />
        </div>

        <div className="chip c2" data-ui>
          <div className="chip-head">
            <span className="chip-no">02</span>
            <span className="chip-label">
              字距 <em>tracking</em>
            </span>
            <span className="readout">{(tracking / 100).toFixed(2)}em</span>
          </div>
          <LabeledSlider
            label="标题字距"
            value={[tracking]}
            onValueChange={(v) => setTracking(v[0])}
            min={-5}
            max={5}
            step={1}
            size="2"
          />
        </div>

        <div className="chip c3" data-ui>
          <div className="chip-head">
            <span className="chip-no">03</span>
            <span className="chip-label">
              强调色 <em>accent</em>
            </span>
            <span className="readout">{accent ? "ON" : "OFF"}</span>
          </div>
          <div className="chip-switch">
            <span className="chip-hint" id="accent-hint">
              <span
                className={`chip-swatch${accent ? " on" : ""}`}
                aria-hidden="true"
              />
              第二行变主题色
            </span>
            <Switch
              checked={accent}
              onCheckedChange={setAccent}
              size="3"
              aria-label="切换强调色"
              aria-describedby="accent-hint"
            />
          </div>
        </div>
      </div>
    </Theme>
  );
}
