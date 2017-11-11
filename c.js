const a = [1, 2, 4, 7, 2, 3, 5];

// console.log(a.filter(e => e % 2 === 1));

// Array.prototype.myFilter = function(fn) {

// }
Array.prototype.locSoLe = function () {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 === 1) output.push(this[i]);
    }
    return output;
}

Array.prototype.locSoChan = function () {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 === 0) output.push(this[i]);
    }
    return output;
}

Array.prototype.loc = function (fn) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) output.push(this[i]);
    }
    return output;
}

// console.log(a.locSoLe());
console.log(a.loc(e => e % 2 === 1));
