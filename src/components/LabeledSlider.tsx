import { useEffect, useRef } from "react";
import { Slider, type SliderProps } from "@radix-ui/themes";

type LabeledSliderProps = SliderProps & { label: string };

export default function LabeledSlider({ label, ...props }: LabeledSliderProps) {
  const rootRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    rootRef.current?.querySelectorAll('[role="slider"]').forEach((thumb) => {
      thumb.setAttribute("aria-label", label);
    });
  }, [label]);

  return <Slider ref={rootRef} {...props} />;
}
