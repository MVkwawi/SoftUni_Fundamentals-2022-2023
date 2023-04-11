function printDnaBySpecification(userSpecification) {

    const dna = [['A', 'T'], ['C', 'G'], ['T', 'T'], ['A', 'G'], ['G', 'G']];

    let currentNum = 0;
    let currentIndex = 0;
    let currentModification = 1; //there are only four
    while (currentNum < userSpecification) {

        if (currentIndex === 5) {
            currentIndex = 0;
        }

        if (currentModification === 5) {
            currentModification = 1;
        }

        let dnaToModify = dna[currentIndex];
        let currentDna = dnaModification(dnaToModify, currentModification);
        console.log(currentDna);

        currentIndex++;
        currentModification++;
        currentNum++;
    }
}

let dnaModification = (arr, currentModification) => {
    //I need to take the current index in the array and disolve it, then use the right combination
    //there are four modifications: **ab**, *a--b*, a----b, *a--b*

    let [one, two] = arr;

    let modOne = '**' + one + two + '**';
    let modTwoAndFour = '*' + one + '--' + two + '*';
    let modThree = one + '----' + two;

    if (currentModification === 1) {
        return modOne;
    } else if (currentModification === 2) {
        return modTwoAndFour;
    } else if (currentModification === 3) {
        return modThree;
    } else if (currentModification === 4) {
        return modTwoAndFour;
    }
}

printDnaBySpecification(10);


