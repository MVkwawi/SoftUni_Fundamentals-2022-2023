function validDates(info) {
    let text = info.shift();
    let pattern = /\b(?<day>\d{2})([.\/-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    
    let valid = text.matchAll(pattern);

    for (const date of valid) {
        console.log(`Day: ${date.groups.day}, Month: ${date.groups.month}, Year: ${date.groups.year}`);
    }
}
validDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);