input = [
    '2',
    'false'
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
let userChoice = +gets();
let userInput = gets();
 
switch (userChoice) {
    case 1:
        print(Number(userInput) + 1);
        break;
    case 2:
        if (userInput == 'true') {
            print('false');
        } else {
            print('true');
        }
        break;
    case 3:
        print(userInput + '*');
        break;
}