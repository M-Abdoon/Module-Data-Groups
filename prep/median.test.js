const calculateMedian = require("/median");

test("Calculate median of an array of numbers", () => {
    const numbers = [10, 20,  30, 50, 60];
    currentTarget= calculateMedian(numbers);
    targetOutput = 30;

    expect(currentTarget).toEqual(targetOutput);
});