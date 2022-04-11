const fizzBuzz = require('./FizzBuzz.js');

test('returns "Fizz" if number is divisible by 3 only', () => {
  expect(fizzBuzz(3)).toBe("Fizz");
  expect(fizzBuzz(9)).toBe("Fizz");
  expect(fizzBuzz(21)).toBe("Fizz");
  expect(fizzBuzz(-3)).toBe("Fizz");
});

test('returns "Buzz" if number is divisible by 5 only', () => {
  expect(fizzBuzz(5)).toBe("Buzz");
  expect(fizzBuzz(10)).toBe("Buzz");
  expect(fizzBuzz(20)).toBe("Buzz");
  expect(fizzBuzz(-5)).toBe("Buzz");
});

test('returns "FizzBuzz" if number is divisible by 3 and 5', () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
  expect(fizzBuzz(30)).toBe("FizzBuzz");
  expect(fizzBuzz(45)).toBe("FizzBuzz");
  expect(fizzBuzz(-15)).toBe("FizzBuzz");
});

test('returns "" if number is not divisible by 3 and 5', () => {
  expect(fizzBuzz(1)).toBe("");
  expect(fizzBuzz(7)).toBe("");
  expect(fizzBuzz(11)).toBe("");
  expect(fizzBuzz(-1)).toBe("");
});

test('returns "Error" if number is not valid', () => {
  expect(fizzBuzz(0)).toBe("Error");
  expect(fizzBuzz(null)).toBe("Error");
  expect(fizzBuzz('String')).toBe("Error");
});