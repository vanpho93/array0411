const arrPerson = [
    { name: 'Teo', age: 10, height: 160 },
    { name: 'Ti', age: 15, height: 140 },
    { name: 'Tun', age: 12, height: 150 },
];
const arrNumber = [1, 3, 4, 2, 6];
// in ra cac phan tu co tuoi lon hon 11
// console.log(arrPerson.filter(e => e.age > 11));
// console.log(arrPerson.filter(e => e.height > 155));
// console.log(arrPerson.map(e => e.age))
// console.log(arrNumber.map(e => e * e))

Array.prototype.myMap = function(fn) {
    const output = [];
    for(let i = 0; i < this.length; i++) {
        output.push(fn(this[i]));
    }
    return output;
}
console.log(arrPerson.myMap(e => e.age));
console.log(arrNumber.myMap(e => e * e));
