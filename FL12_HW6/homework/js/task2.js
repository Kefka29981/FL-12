const a = +prompt('Enter a');
const b = +prompt('Enter b');
const c = +prompt('Enter c');

let itExist = false;

if(isNaN(a) || isNaN(b) || isNaN(c)){
    alert('input values should be ONLY number');
}else if(a <= 0 || b <= 0 || c <= 0){
    alert('A triangle must have 3 sides with a positive definite length');
}else if(a + b < c || b + c < a || a + c < b){
    alert('Triangle doesn’t exist');
    console.log('Triangle doesn’t exist');
}else{
    itExist = true;
}

if(itExist === true){
    if(a === b && b === c){
        console.log('Equilateral triangle');
    }else if(a === b || b === c || a === c){
        console.log('Isosceles triangle');
    }else{
        console.log('Scalene triangle');
    }
}
