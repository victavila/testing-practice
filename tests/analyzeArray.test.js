import analyzeArray from "../code/analyzeArray";

test("[1, 2, 3, 4]", () => {
  expect(analyzeArray([1, 2, 3, 4])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});

test("[1,8,3,4,2,6]", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("[4, 2]", () => {
  expect(analyzeArray([4, 2])).toEqual({
    average: 3,
    min: 2,
    max: 4,
    length: 2,
  });
});

test("[2, 2, 2, 2]", () => {
  expect(analyzeArray([2, 2, 2, 2])).toEqual({
    average: 2,
    min: 2,
    max: 2,
    length: 4,
  });
});
