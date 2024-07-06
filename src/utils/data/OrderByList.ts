import { type orderBy } from "t3/types/globalTypes";

export const OrderByList: {
  label: string;
  value: orderBy;
}[] = [
  {
    label: "Ascending",
    value: "asc",
  },
  {
    label: "Descending",
    value: "desc",
  },
];
