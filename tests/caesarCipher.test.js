import caesarCipher from "../code/caesarCipher";

test("'string' to be 'tusjoh'", () => {
  expect(caesarCipher("string")).toBe("tusjoh");
});

test("'abcdefghijklmnopqrstuvwxyz' to be 'bcdefghijklmnopqrstuvwxyza'", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz")).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});

test("'Capital Words' to be 'Dbqjubm Xpset'", () => {
  expect(caesarCipher("Capital Words")).toBe("Dbqjubm Xpset");
});

test("'test, punctuation.' to be 'uftu, qvoduvbujpo.'", () => {
  expect(caesarCipher("test, punctuation.")).toBe("uftu, qvoduvbujpo.");
});
