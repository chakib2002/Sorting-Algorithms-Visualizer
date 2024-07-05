export const swap = (arr: number[], a: number, b: number, delay = 50) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
      resolve("swapped");
    }, delay);
  });
};
