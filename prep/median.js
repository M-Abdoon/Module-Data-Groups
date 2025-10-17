function calculateMedian(numbers) {
    const middleIndex = Math.floor(numbers.length / 2);
    const median = numbers.splice(middleIndex, 1)[0];
    return median;
}
module.exports = calculateMedian;