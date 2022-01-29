let input = [
    '-5',
    '2',
    '-2'
    
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = Number(gets())
let b = Number(gets())
let c = Number(gets())

if (a == 0 || b == 0 || c == 0){
    print('0');
} else if(a>0 && b >0 && c >0 ){
    print('+');
}else if(a<0 && b<0 && c >0 ){
    print('+');
}else if(a<0 && b<0 && c >0 ){
    print('+');
}else if(a>0 && b<0 && c <0 ){
    print('+');
}else if(a<0 && b>0 && c<0 ){
    print('+');
}else{
    print('-');
}
