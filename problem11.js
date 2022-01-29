input = [
    '00:59 PM',
    //'1:00 PM',
    //'8:30 AM'
    //'02:59 AM'
    
];

 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
let time = gets();
//print(time);


let hour = time.slice(0,2)//slice first two 01 or 02 when is AM before five or six should have zero 
//print(hour);
let PM = time.slice(-2)
if (PM==="PM" && time.slice(0)>='1'){
    print('beer time')
}else if(PM=="AM" && hour<3){
    print('beer time')
}
else{
    print('non-beer time')
}

