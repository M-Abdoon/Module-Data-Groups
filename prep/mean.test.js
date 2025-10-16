const calculateMean =  require("/mean");

test("Calculates the mean of a list of numbers", () => {
    const list = [3, 50, 7];
    currentOutput = calculateMean(list);
    targetOutput  = 20;

    expect(currentOutput).toEqual(targetOutput);
});