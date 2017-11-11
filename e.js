const arrPerson = [
    { name: 'Teo', age: 10, height: 160 },
    { name: 'Ti', age: 15, height: 140 },
    { name: 'Tun', age: 12, height: 150 },
];
const arrNumber = [1, 3, 4, 2, 6];

// console.log('a' === 'a');
console.log(arrNumber.indexOf(4));
// console.log(arrPerson.indexOf({ name: 'Ti', age: 15, height: 140 }));
// console.log({ name: 'a' } === { name: 'a' });


Array.prototype.myFind = function(fn) {
    for(let i = 0; i < this.length; i++) {
        if (fn(this[i])) return this[i];
    }
}

Array.prototype.myFindIndex = function(fn) {
    for(let i = 0; i < this.length; i++) {
        if (fn(this[i])) return i;
    }
}

console.log(arrPerson.myFind(e => e.name === 'Ti'));
