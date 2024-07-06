import { type ISortingAlgorithm } from "./BaseStrategy";
import changeElementPosition from "t3/utils/helpers/changeElementPosition";

export default class InsertionSortStrategy implements ISortingAlgorithm {
  sort: (
    arr: number[],
    setArr: React.Dispatch<React.SetStateAction<number[]>>,
    order: "asc" | "desc",
    delay: number | undefined,
  ) => Promise<void>;
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
      switch (order) {
        case "asc":
          for (let i = 1; i < array.length; i++) {
            const key = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > key) {
              if (this.continueIteration === false) break;
              await changeElementPosition(array, j, j + 1, delay);
              setArr([...array]);
              j = j - 1;
            }
            array[j + 1] = key;
            setArr([...array]);
          }
          break;

        case "desc":
          for (let i = 1; i < array.length; i++) {
            const key = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] < key) {
              if (this.continueIteration === false) break;
              await changeElementPosition(array, j, j + 1, delay);
              setArr([...array]);
              j = j - 1;
            }
            array[j + 1] = key;
            setArr([...array]);
          }
          break;

        default:
          break;
      }
    };
  }
}
