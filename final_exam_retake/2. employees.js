function employees(info) {
    let inputNum = Number(info.shift());
    let pattern = /(?<name>[A-Z][a-z]{3,} [A-Z][a-z]{3,})#+(?<job>[A-Z][a-z]+(&{0,1}[A-Za-z])*(&{0,1}[A-Za-z])*)\d{2}[A-Z]\w+ (Ltd\.)*(JSC)*/g;

    // info.forEach(str => {
    //     let matches = str.match(pattern);
    //     console.log(`${matches.groups.name} is ${matches.groups.job} at`);
    // });
    // let num = 0;
    // while (num < inputNum) {
        let currentStr = info.shift();
        let valid = currentStr.matchAll(pattern);

        for (const str of valid) {
            console.log(`${str.groups.name} is ${str.groups.job} at`);
        }
    //     num ++;
    // }

    console.log(info);
}

employees((["2",
"Mariya Ivanova#Photographer&&Machine25PhotoStudio12 Ltd.",
"Monica Hristova####Nuclear&Engineer99Station JSC"]));