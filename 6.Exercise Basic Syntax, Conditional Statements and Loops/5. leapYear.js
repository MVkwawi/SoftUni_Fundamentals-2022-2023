function leapYear(year) {
    let leapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    if (leapYear) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
leapYear(1900)