function requiredReading(pages, pagesPerHour, daysToRead) {
    let hoursPerBook = pages / pagesPerHour;
    let hoursPerDay = hoursPerBook / daysToRead;

    console.log(hoursPerDay);
}
requiredReading(432,
    15 ,
    4 
    )