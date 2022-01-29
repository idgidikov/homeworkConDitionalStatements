let input = [
    '-0.1',
    '-0.5',
    '-1.1'
 
];
 

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = Number(gets())
let b = Number(gets())
let c = Number(gets())

print(Math.max(a,b,c))
