function printCertificate(grade, student) {
    //print certificate
    printHeader();
    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
    }
    //print name
    console.log(`${student[0]} ${student[1]}`);
    //print grade
    formatGrade(grade);
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
}
printCertificate(5.25, ['Peter', 'Carter']);