export const sum = (...numbers: number[]): number => {
  return numbers.reduce((acc, num) => {
    return acc + num
  }, 1)
}
