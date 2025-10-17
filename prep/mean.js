function calculateMean(list) {
    let totalSum = 0;
    let listLength = list.length;
    for ( const item of list) {
        totalSum += item;
    }
    return Math.floor(totalSum / listLength);
}
module.exports = calculateMean;