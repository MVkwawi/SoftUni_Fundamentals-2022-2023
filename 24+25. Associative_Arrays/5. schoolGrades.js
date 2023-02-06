function schoolGrades (array) {
    let studentAndGrades = {};

    for (const el of array) {
        let student = el.split(' ');
        let name = student.shift();
        let grades = student.map((x) => Number(x));

        if (!studentAndGrades[name]) {
            studentAndGrades[name] = [];
        }

        studentAndGrades[name] = studentAndGrades[name].concat(grades);
    }

    let studentEntrie = Object.entries(studentAndGrades);
    studentEntrie.sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

    for (const [name, grades] of studentEntrie) {
        let sum = 0;

        for (const grade of grades) {
            sum += grade;
        }

        let average = sum / grades.length;

        console.log(`${name}: ${average.toFixed(2)} `);
    }
}

schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']);