import type { Dispatch, SetStateAction } from "react";
import type { orderBy } from "t3/types/globalTypes";

export interface ISortingAlgorithm {
  sort: (
    arr: number[],
    setArr: Dispatch<SetStateAction<number[]>>,
    order: orderBy,
    delay: number | undefined,
  ) => Promise<void>;
}
