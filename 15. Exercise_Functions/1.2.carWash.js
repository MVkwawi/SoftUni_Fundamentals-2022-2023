function cleanTheCar(commands) {
    let persentClean = 0;

    for (const command of commands) {
        if (command === 'soap') {
            persentClean += soap();
        } else if (command === 'water') {
            persentClean += water(persentClean);
        } else if (command === 'vacuum cleaner') {
            persentClean += vacuumCleaner(persentClean);
        } else if (command === 'mud') {
            persentClean = mud(persentClean);
        }
    }

    console.log(`The car is ${persentClean.toFixed(2)}% clean.`);
}

let soap = () => {
    let a = 10;
    return a;
}

let water = (a) => {
    a = a * 0.2;
    return a;
}

let vacuumCleaner = (a) => {
    a = a * 0.25;
    return a;
}

let mud = (a) => {
    let division = a * 0.1;
    a = a - division;
    return a;
}

cleanTheCar(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
cleanTheCar(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);