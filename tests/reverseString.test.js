import reverseString from "../code/reverseString";

test("'String' to be 'gnirtS'", () => {
  expect(reverseString("String")).toBe("gnirtS");
});

test("'Reverse string' to be 'gnirts esreveR'", () => {
  expect(reverseString("gnirts esreveR")).toBe("Reverse string");
});

test("Empty string", () => {
  expect(reverseString("")).toBe("");
});
