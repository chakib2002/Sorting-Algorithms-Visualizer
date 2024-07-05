import { type SortingAlgorithmsNames } from "t3/types/globalTypes";

export const AlgorithmsList: {
  value: SortingAlgorithmsNames;
  label: string;
}[] = [
  {
    value: "bubbleSort",
    label: "Bubble Sort",
  },
  {
    value: "bucketSort",
    label: "Bucket Sort",
  },
  {
    value: "countingSort",
    label: "Counting Sort",
  },
  {
    value: "heapSort",
    label: "Heap Sort",
  },
  {
    value: "insertionSort",
    label: "Insertion Sort",
  },
  {
    value: "mergeSort",
    label: "Merge Sort",
  },
  {
    value: "quickSort",
    label: "Quick Sort",
  },
  {
    value: "radixSort",
    label: "Radix Sort",
  },
  {
    value: "selectionSort",
    label: "Selection Sort",
  },
  {
    value: "shellSort",
    label: "Shell Sort",
  },
  {
    value: "timSort",
    label: "Tim Sort",
  },
  {
    value: "TreeSort",
    label: "Tree Sort",
  },
];