import { useState } from "react";
import { Theme, Switch, Flex, Text } from "@radix-ui/themes";
import LabeledSlider from "./LabeledSlider";

export default function HeroPlayground() {
  const [weight, setWeight] = useState(800);
  const [tracking, setTracking] = useState(-2); // 单位 0.01em
  const [accent, setAccent] = useState(false);

  return (
    <Theme accentColor="blue" grayColor="gray" radius="medium" hasBackground={false}>
    <div className="hero-stage">
      <h1
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
          <Text size="1" weight="medium">
            字重
          </Text>
          <span className="readout">{weight}</span>
        </div>
        <LabeledSlider
          label="标题字重"
          value={[weight]}
          onValueChange={(v) => setWeight(v[0])}
          min={400}
          max={900}
          step={100}
        />
      </div>

      <div className="chip c2" data-ui>
        <div className="chip-head">
          <Text size="1" weight="medium">
            字距
          </Text>
          <span className="readout">{(tracking / 100).toFixed(2)}em</span>
        </div>
        <LabeledSlider
          label="标题字距"
          value={[tracking]}
          onValueChange={(v) => setTracking(v[0])}
          min={-5}
          max={5}
          step={1}
        />
      </div>

      <div className="chip c3" data-ui>
        <div className="chip-head">
          <Text size="1" weight="medium">
            强调色
          </Text>
          <span className="readout">{accent ? "开" : "关"}</span>
        </div>
        <Flex align="center" gap="3">
          <Switch
            checked={accent}
            onCheckedChange={setAccent}
            aria-label="切换强调色"
          />
          <Text size="1" color="gray">
            第二行变为主题色
          </Text>
        </Flex>
      </div>
    </div>
    </Theme>
  );
}
