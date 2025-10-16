function calculateMean(list) {
    let totalSum = 0;
    let listLength = list.length;
    for ( const item of list) {
        totalSum += item;
    }
    return Math.floor(totalSum / listLength);
}

console.log(calculateMean([9,6,1,1]));
module.exports = calculateMean;