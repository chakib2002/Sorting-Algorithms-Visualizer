export default function changeElementPosition(
  array: number[],
  first: number,
  second: number,
  delay = 50,
) {
  return new Promise((resolve) => {
    setTimeout(() => {
      array[second] = array[first];
      resolve("resolved");
    }, delay);
  });
}
