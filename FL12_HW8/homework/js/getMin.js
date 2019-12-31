function getMin(...arr){
let min = arr[0];
for(let i = 1; i < arr.length; i++ ){
    if(arr[i] < min){
        min = arr[i];
    }
}
return min;
}

getMin(3,0,-3);

function isLeapYear(year) {
    let date = new Date(year);
    let isLeap;
    if (isNaN(date)) {
        return date;
    } else {
        isLeap = date.getFullYear();
        if(isLeap % 4 === 0 && isLeap % 100 !== 0 || isLeap % 400 === 0) {
            return `${isLeap} is a leap year`;
        } else {
            return `${isLeap} is not a leap year`;
        }
    }
}