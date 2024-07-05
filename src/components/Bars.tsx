import React from "react";
import { Bar } from "./Bar";

interface BarsProps {
  data: number[];
}

export const Bars: React.FC<BarsProps> = ({ data }) => {
  return (
    <div className={`relative flex h-full justify-center gap-0.5`}>
      {data.map((e, i) => (
        <Bar key={i} value={e} />
      ))}
    </div>
  );
};
