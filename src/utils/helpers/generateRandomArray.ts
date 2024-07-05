export function generateRandomArray(n: number) {
  // Check if the input is a positive integer
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("The length of the array must be a positive integer.");
  }

  // Create an array with n random numbers between 1 and 99
  const randomArray = Array.from(
    { length: n },
    () => Math.floor(Math.random() * 99) + 1,
  );

  return randomArray;
}
