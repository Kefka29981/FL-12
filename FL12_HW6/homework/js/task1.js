const a = +prompt('Enter a');
const b = +prompt('Enter b');
const c = +prompt('Enter c');

const num1 = 2;
const num2 = 4;
let disc;
let x1;
let x2;

if(isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
    console.log('Invalid input data');
} else{
    disc = Math.pow(b,num1) + num2 * a * c;
    if(disc < 0){
        console.log('no solution')
    } else if(disc === 0){
            x1 = -b / (num1*a);
            console.log('x = ' + x1);
    } else{
        x1 = (-b + Math.sqrt(disc)) / (num1 * a);
        x2 = (-b - Math.sqrt(disc)) / (num1 * a);
        console.log('x1 = ' + x1 + ' and ' + 'x2 = ' + x2);
    }
}