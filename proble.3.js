let input = [
    'Q'
    
 
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let validSign = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'Q', 'K','A']//this a array

let a = gets(); // input should be string else array.includes() will not work, if in the array everything is number the input should be number too


//includes --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
//includes compares absolute value, like === operator 
if(validSign.includes(a)){ 
    print("yes")
}else{
    print('no')
}