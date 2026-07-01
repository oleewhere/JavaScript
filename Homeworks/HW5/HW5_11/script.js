const sum = arr => {
    let total = 0;
    for (const num of arr) {
        total += num;
    }
    return total;
};
console.log(sum([1, 2, 10]));
console.log(sum([5, 9, 18]));