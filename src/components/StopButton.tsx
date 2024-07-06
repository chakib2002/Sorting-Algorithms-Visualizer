import { Pause, Play } from "lucide-react";
import React, { type FC } from "react";
import { Button } from "t/components/ui/button";
import { useStrategy } from "t3/strategies/ContextStrategy";
import { type orderBy } from "t3/types/globalTypes";
interface StopButtonProps {
  array: number[];
  setArray: React.Dispatch<React.SetStateAction<number[]>>;
  order: orderBy;
  delay?: number;
}

const StopButton: FC<StopButtonProps> = ({ array, setArray, order, delay }) => {
  const { strategy } = useStrategy();

  if (strategy?.continueIteration === true) {
    return (
      <Button
        onClick={() => {
          strategy.stopIteration();
        }}
        className="flex items-center border-2 border-slate-900 bg-white text-slate-900 lg:hover:border-slate-500 lg:hover:bg-slate-100 lg:hover:text-slate-500"
      >
        <Pause size={24} />
        <span>STOP</span>
      </Button>
    );
  }
  if (strategy?.continueIteration === false) {
    return (
      <Button
        onClick={async () => {
          strategy.retakeIteration();
          await strategy?.sort(array, setArray, order, delay);
        }}
        className="flex items-center border-2 border-slate-900 bg-white text-slate-900 lg:hover:border-slate-500 lg:hover:bg-slate-100 lg:hover:text-slate-500"
      >
        <Play size={24} />
        <span>Play</span>
      </Button>
    );
  }
};

export default StopButton;
