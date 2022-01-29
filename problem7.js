let input = [
    '5',
    '5',
    '5'
    
 
];
 

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = Number(gets());
let b=Number(gets());
let c = Number(gets());

let biggest = Math.max(a,b,c)
let smallest = Math.min(a,b,c)
let middle =0;

if (a<biggest&&a>smallest){
    middle=a;
    

}
else if (b<biggest&&b>smallest){
    middle=b;

}
else if (c<biggest&&c>smallest){
    middle=c;

}
if (middle===0){
    middle=smallest
}

print(`${biggest} ${middle} ${smallest}`)