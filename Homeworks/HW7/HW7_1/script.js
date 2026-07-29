//Власний ForEach
Array.prototype.ownForEach = function(callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
        if (i in this){
            callback.call(thisArg, this[i], i, this);
        }
    }
}
let numbers = [1, 2, 3, 4, 11, 12, 16, 22];
numbers.ownForEach((item,id) => {
    console.log(`${item}, id: ${id}`)
})


//Власний Filter
Array.prototype.ownFilter = function(callback, thisArg) {
const result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this){
            if(callback.call(thisArg, this[i], i, this)) {
                result.push(this[i])
            }
        }
    }
    return result;
}
let nums = [1, 3, 4, 11, 12, 16, 17, 20, 22];
const oddNumbers = nums.ownFilter(num => num % 2 === 1);
console.log(oddNumbers);