"use client";

import { cn } from "t/lib/utils";
import { Slider as SliderComponent } from "t/components/ui/slider";

type SliderProps = React.ComponentProps<typeof SliderComponent>;

export function Slider({
  className,
  ...props
}: SliderProps & { title: string }) {
  return (
    <div className="space-y-1">
      <p>{props.title}</p>
      <SliderComponent
        max={props.max}
        min={props.min}
        step={props.step ?? 1}
        className={cn("w-[250px]", className)}
        {...props}
      />
    </div>
  );
}
