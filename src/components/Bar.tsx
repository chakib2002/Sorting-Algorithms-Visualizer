import React from "react";

interface BarProps {
  value: number;
}

export const Bar: React.FC<BarProps> = ({ value }) => {
  return (
    <div
      style={{ height: `${value}%` }}
      className={`z-50 block min-w-[1px] flex-grow bg-slate-900`}
    />
  );
};
