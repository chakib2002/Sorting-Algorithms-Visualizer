import type { Dispatch, SetStateAction } from "react";
import type { orderBy } from "t3/types/globalTypes";
import { type ISortingAlgorithm } from "./BaseStrategy";
import { swap } from "t3/utils/helpers/swap";

export default class SelectionSortStrategy implements ISortingAlgorithm {
  sort: (
    arr: number[],
    setArr: Dispatch<SetStateAction<number[]>>,
    order: orderBy,
    delay: number | undefined,
  ) => Promise<void>;

  continueIteration: boolean;
  stopIteration: () => void;
  retakeIteration: () => void;

  constructor() {
    this.continueIteration = true;
    this.stopIteration = () => {
      this.continueIteration = false;
    };
    this.retakeIteration = () => {
      this.continueIteration = true;
    };
    this.sort = async (array, setArr, order, delay) => {
      const len = array.length;
      switch (order) {
        case "asc":
          for (let i = 0; i < len - 1; i++) {
            // Find the minimum element in the unsorted portion of the array
            let minIndex = i;
            for (let j = i + 1; j < len; j++) {
              if (!this.continueIteration) {
                break;
              }
              if (array[j] < array[minIndex]) {
                minIndex = j;
              }
            }

            // Swap the found minimum element with the first element of the unsorted portion
            if (minIndex !== i) {
              await swap(array, i, minIndex, delay);
              setArr([...array]);
            }
          }
          break;
        case "desc":
          for (let i = 0; i < len - 1; i++) {
            // Find the minimum element in the unsorted portion of the array
            let maxIndex = i;
            for (let j = i + 1; j < len; j++) {
              if (!this.continueIteration) {
                break;
              }
              if (array[j] > array[maxIndex]) {
                maxIndex = j;
              }
            }

            // Swap the found minimum element with the first element of the unsorted portion
            if (maxIndex !== i) {
              await swap(array, i, maxIndex, delay);
              setArr([...array]);
            }
          }
      }
    };
  }
}
