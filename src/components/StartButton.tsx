import React, { type FC } from "react";
import { Button } from "t/components/ui/button";
import { useStrategy } from "t3/strategies/ContextStrategy";
import { type orderBy } from "t3/types/globalTypes";
interface StartButtonProps {
  array: number[];
  setArray: React.Dispatch<React.SetStateAction<number[]>>;
  order: orderBy;
  delay?: number;
}

const StartButton: FC<StartButtonProps> = ({
  array,
  setArray,
  order,
  delay,
}) => {
  const { strategy } = useStrategy();
  return (
    <Button
      onClick={async () => {
        await strategy?.sort(array, setArray, order, delay);
      }}
      className="bg-slate-900 px-6 py-2 font-semibold text-white transition duration-300 ease-out active:scale-95 lg:ring-slate-900 lg:hover:bg-white lg:hover:text-slate-900 lg:hover:ring-2"
    >
      Start
    </Button>
  );
};

export default StartButton;
