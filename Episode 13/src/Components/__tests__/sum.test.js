import { sum } from "../sum"

test("Sum function should be calculate the sum of a and b", () => {
    const result = sum(3,2);

    // Assertion
    expect(result).toBe(7-2);
})