function employees(info) {
    let employeeList = {}

    for (const name of info) {
        employeeList[name] = name.length;
    }

    for (const key in employeeList) {
        console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);