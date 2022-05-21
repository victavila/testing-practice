const analyzeArray = (arr) => {
  const average = arr.reduce((sum, curr) => sum + curr / arr.length, 0);

  const min = arr.reduce(
    (prev, curr) => Math.min(prev, curr),
    Number.POSITIVE_INFINITY
  );

  const max = arr.reduce(
    (prev, curr) => Math.max(prev, curr),
    Number.NEGATIVE_INFINITY
  );

  const length = arr.length;
  return { average, max, min, length };
};

export default analyzeArray;
