function calculateBoxWrapper (input) {
    const sideSize = Number(input.shift());
    const boxArea = sideSize * sideSize * 6;

    const paperNum = Number(input.shift());
    let allPaperArea = 0;

    for (let paper = 1; paper <= paperNum; paper ++) {
        let length = Number(input.shift());
        let width = Number(input.shift());

        let area = length * width;

        if (paper % 3 === 0) {
            area *= 0.75;
        }

        if (paper % 5 === 0) {
            area = 0;
        }

        allPaperArea += area;
    }

    if (boxArea <= allPaperArea) {
        let totalArea = ((allPaperArea - boxArea) / allPaperArea) * 100;
        console.log('You\'ve covered the gift box!');
        console.log(`${totalArea.toFixed(2)}% wrap paper left.`);

    } else {
        console.log('You are out of paper!');
        let totalCoveredArea = (allPaperArea / boxArea) * 100;
        totalCoveredArea = 100 - totalCoveredArea;
        console.log(`${totalCoveredArea.toFixed(2)}% of the box is not covered.`);
    }
}

// calculateBoxWrapper(["10",
// "5",
// "3",
// "0.5",
// "2.4",
// "5",
// "3.7",
// "1",
// "3",
// "34.7",
// "5",
// "80"]);
calculateBoxWrapper(["2",
"2",
"0.2",
"7",
"6",
"8.5"]);