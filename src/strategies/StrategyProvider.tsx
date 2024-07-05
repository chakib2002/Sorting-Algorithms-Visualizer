import React, { type ReactNode } from "react";
import { StrategyProvider as OriginalStrategyProvider } from "./ContextStrategy";

const StrategyProvider = ({ children }: { children: ReactNode }) => {
  return <OriginalStrategyProvider>{children}</OriginalStrategyProvider>;
};

export default StrategyProvider;
