import { type orderBy } from "t3/types/globalTypes";
import { type ISortingAlgorithm } from "./BaseStrategy";
import { type Dispatch, type SetStateAction } from "react";
import { swap } from "t3/utils/helpers/swap";

export default class bubbleSortStrategy implements ISortingAlgorithm {
  sort: (
    arr: number[],
    setArr: Dispatch<SetStateAction<number[]>>,
    order: orderBy,
    delay: number | undefined,
  ) => Promise<void>;

  constructor() {
    this.sort = async (array, setArr, order, delay) => {
      switch (order) {
        case "asc":
          for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
              if (array[j] > array[j + 1]) {
                await swap(array, j, j + 1, delay);
                setArr([...array]);
              }
            }
          }
          break;

        case "desc":
          for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
              if (array[j] < array[j + 1]) {
                await swap(array, j, j + 1, delay);
                setArr([...array]);
              }
            }
          }
          break;

        default:
          break;
      }
    };
  }
}
