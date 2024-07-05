"use client";
import { type ReactNode, createContext, useContext, useState } from "react";
import type { ISortingAlgorithm } from "./BaseStrategy";

interface StrategyContextType {
  strategy: ISortingAlgorithm | null;
  setStrategy: (strategy: ISortingAlgorithm) => void;
}

const StrategyContext = createContext<StrategyContextType | null>(null);

export const StrategyProvider = ({ children }: { children: ReactNode }) => {
  const [strategy, setStrategy] = useState<ISortingAlgorithm | null>(null);

  return (
    <StrategyContext.Provider value={{ strategy, setStrategy }}>
      {children}
    </StrategyContext.Provider>
  );
};

export const useStrategy = () => {
  const context = useContext(StrategyContext);
  if (!context) {
    throw new Error("useStrategy must be used within a StrategyProvider");
  }
  return context;
};
