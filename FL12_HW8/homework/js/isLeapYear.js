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

isLeapYear('2020-01-01 00:00:00');