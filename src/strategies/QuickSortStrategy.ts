import { type orderBy } from "t3/types/globalTypes";
import { type ISortingAlgorithm } from "./BaseStrategy";

export default class QuickSortStrategy implements ISortingAlgorithm {
  sort: (
    arr: number[],
    setArr: React.Dispatch<React.SetStateAction<number[]>>,
    order: "asc" | "desc",
    delay: number | undefined,
  ) => Promise<number[]>;
  continueIteration: boolean;
  stopIteration: () => void;
  retakeIteration: () => void;

  constructor() {
    this.continueIteration = false;
    this.stopIteration = () => {
      this.continueIteration = false;
    };
    this.retakeIteration = () => {
      this.continueIteration = true;
    };

    this.sort = async (array, setArr, order, delay) => {
      const quickSort = async (arr: number[], left: number, right: number) => {
        if (left >= right) {
          return;
        }

        const pivot = arr[Math.floor((left + right) / 2)];
        const index = await partition(
          arr,
          left,
          right,
          pivot,
          setArr,
          delay,
          order,
        );

        await quickSort(arr, left, index - 1);

        await quickSort(arr, index, right);
      };

      const partition = async (
        arr: number[],
        left: number,
        right: number,
        pivot: number,
        setArr: React.Dispatch<React.SetStateAction<number[]>>,
        delay: number | undefined,
        order: orderBy,
      ) => {
        while (left <= right) {
          if (order === "asc") {
            while (arr[left] < pivot) {
              left++;
            }
            while (arr[right] > pivot) {
              right--;
            }
          } else {
            while (arr[left] > pivot) {
              left++;
            }
            while (arr[right] < pivot) {
              right--;
            }
          }
          if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            setArr([...arr]);
            if (delay) {
              await new Promise((resolve) => setTimeout(resolve, delay));
            }
            left++;
            right--;
          }
        }
        return left;
      };

      await quickSort(array, 0, array.length - 1);
      return array;
    };
  }
}
