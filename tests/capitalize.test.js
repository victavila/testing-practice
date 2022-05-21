import capitalize from "../code/capitalize";

test("story to Story", () => {
  expect(capitalize("story")).toBe("Story");
});

test("empty string", () => {
  expect(capitalize("")).toBe("");
});

test("only takes string arguments", () => {
  expect(capitalize(1)).toBe("");
});
