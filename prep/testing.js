// Write a function which takes an array as a parameter
//   and swaps the first element with the last element

function swapFirstAndLast(arr) {
    newArr = [];
    let swap = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length -1] = swap;

    for (const item of arr) {
        newArr.push(item);
    }
    return newArr;
}

const myArray = [5, 2, 3, 4, 7, 5, 7, 9, 1, 3, 1, 5, 7, 8 ,0 ,9];
swapFirstAndLast(myArray);
console.log(myArray); // what output should we expect?