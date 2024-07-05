import type { Dispatch, SetStateAction, FC } from "react";
import { type orderBy } from "t3/types/globalTypes";
import SelectMenu from "./SelectMenu";
import { AlgorithmsList } from "t3/utils/data/AlgorithmsList";
import StartButton from "./StartButton";

interface HeaderProps {
  array: number[];
  setArray: Dispatch<SetStateAction<number[]>>;
  order: orderBy;
  delay?: number;
}

const Header: FC<HeaderProps> = ({ array, setArray, order, delay }) => {
  return (
    <div className="flex h-20 items-center justify-between px-5">
      <span className="my-auto hidden text-xl font-bold sm:block">
        Sorting Visualizer
      </span>
      <div className="flex justify-between gap-3 sm:justify-end">
        <SelectMenu items={AlgorithmsList} placeholder="Select an algorithm" />
        <StartButton
          array={array}
          setArray={setArray}
          delay={delay}
          order={order}
        />
      </div>
    </div>
  );
};
export default Header;
