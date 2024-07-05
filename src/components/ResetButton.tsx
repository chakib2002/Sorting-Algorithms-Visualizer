import { type FC } from "react";
import { Button } from "t/components/ui/button";
import { generateRandomArray } from "t3/utils/helpers/generateRandomArray";

interface ResetButtonProps {
  arrayLength: number;
  setArray: React.Dispatch<React.SetStateAction<number[]>>;
}

const ResetButton: FC<ResetButtonProps> = ({ arrayLength, setArray }) => {
  return (
    <Button
      onClick={() => {
        const newArray = generateRandomArray(arrayLength);
        setArray(newArray);
      }}
      className="bg-slate-900 px-6 py-2 font-semibold text-white transition duration-300 ease-out active:scale-95 lg:ring-slate-900 lg:hover:bg-white lg:hover:text-slate-900 lg:hover:ring-2"
    >
      Reset
    </Button>
  );
};

export default ResetButton;
