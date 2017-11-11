const a = ['Node', 'React', 'Android', 'iOS'];
// a.forEach(e => console.log(e));
Array.prototype.myForEach = function(fn) {
    for(let i = 0; i < this.length; i++) fn(this[i]);
    // for(let i = 0; i < a.length; i++) console.log(a[i]);
}
// a.myForEach(x => console.log(x));
a.myForEach(console.log);
a.myForEach(e => console.log('Value: ' + e));
