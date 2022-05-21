import calculator from "../code/calculator";

test("2 + 2 = 4", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("4 - 2 = 2", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test("2 * 2 = 4", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("4 / 2 = 2", () => {
  expect(calculator.divide(4, 2)).toBeCloseTo(2);
});

test("Dividing by 0", () => {
  expect(calculator.divide(4, 0)).toBe("error");
});
