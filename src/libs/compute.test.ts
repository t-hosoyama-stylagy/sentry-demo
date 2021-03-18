import { sum } from "./compute"

describe("compute", () => {
  describe("sum", () => {
    test("引数がなければ0を返す", () => {
      expect(sum()).toBe(0)
    })
    test("引数が1つの場合はそのまま返す", () => {
      expect(sum(1)).toBe(1)
      expect(sum(99)).toBe(99)
      expect(sum(-5)).toBe(-5)
    })
    test("可変長引数の値をすべて加算した値を返す", () => {
      expect(sum(1, 2)).toBe(1 + 2)
      expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(
        1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
      )
      expect(sum(-1, -2)).toBe(-1 + -2)
    })
  })
})
