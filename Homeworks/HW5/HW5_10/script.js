const MinimalValue = arr => {
    let min = arr[0];
    for (const num of arr) {
        if (num < min) {
            min = num;
        }
    }
    return min;
};
console.log(MinimalValue([38, 1, -17, -1, -18.5, 6]));