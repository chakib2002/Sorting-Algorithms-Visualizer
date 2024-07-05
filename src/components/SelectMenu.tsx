"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "t/components/ui/select";
import bubbleSortStrategy from "t3/strategies/BubbleSortStrategy";
import { useStrategy } from "t3/strategies/ContextStrategy";
import { type SortingAlgorithmsNames } from "t3/types/globalTypes";

interface SelectMenuProps {
  placeholder?: string;
  items: {
    value: SortingAlgorithmsNames;
    label: string;
  }[];
}
const SelectMenu: React.FC<SelectMenuProps> = ({ placeholder, items }) => {
  const { setStrategy } = useStrategy();

  const handleValueChange = (value: SortingAlgorithmsNames) => {
    if (value === "bubbleSort") setStrategy(new bubbleSortStrategy());
  };

  return (
    <Select
      onValueChange={(value: SortingAlgorithmsNames) =>
        handleValueChange(value)
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="w-[180px]">
          {items.map((item) => (
            <SelectItem value={item.value} key={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectMenu;
