function date(year, month, day) {

    let currentDay = day + 1;

    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        if (day === 31) {
            month += 1;
            currentDay = 1;
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        if (day === 30) {
            month += 1;
            currentDay = 1;
        }
    } else if (month === 2) {
        if (day === 29) {
            month += 1;
            currentDay = 1;
        }
    }
    
    if (year === 1) {
            year = 1901;
        }
    
        if (month >= 12 && day === 31) {
        year += 1;
        currentDay = 1;
        month = 1;
    }

    

    console.log(`${year}-${month}-${currentDay}`);
}
date(1, 1, 1)