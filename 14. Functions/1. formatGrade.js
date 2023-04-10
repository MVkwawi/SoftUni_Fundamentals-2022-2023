function formatGrade(grade) {
    let marks = '';

    if (grade < 3) {
        marks = 'Fail';
        grade = 2;
        console.log(`${marks} (${grade})`);
    } else {
        if (grade < 3.5) {
            marks = 'Poor';
        } else if (grade < 4.5) {
            marks = 'Good';
        } else if (grade < 5.5) {
            marks = 'Very good';
        } else {
            marks = 'Excellent';
        }

        console.log(`${marks} (${grade.toFixed(2)})`);
    }
}
formatGrade(2.99);