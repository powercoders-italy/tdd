import { sum } from "./sum";

describe("Sum Application", () => {
  it("should sum two numbers together", () => {
    // 1. given
    const a = 2;
    const b = 3;
    const expectedResult = 5;

    // 2. when
    const result = sum(a, b);

    // 3. then
    expect(result).toBe(expectedResult);
  });

  it("should sum any other number", () => {
    const a = 3;
    const b = 4;
    const expectedResult = 7;

    const result = sum(a, b);

    expect(result).toBe(expectedResult);
  });
});
