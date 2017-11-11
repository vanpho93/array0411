// const a = new Array()
const a = ['Node', 'React', 'Android', 'iOS'];

a.push('PHP', 'ABCD');
// a.unshift('PHP');
// a.shift();
// a.pop();
// a.splice(1, 2);
// a.splice(1, 0, 'PHP', 'Native');
// console.log(a);
Array.prototype.show = function() {
    console.log('ValueP: ' + this);
}

a.show();