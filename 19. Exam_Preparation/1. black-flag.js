function plunderTrgetIsReached(info) {

    const daysToPlunder = Number(info.shift());
    const dailyGain = Number(info.shift());
    const plunderGoal = Number(info.shift());

    let gainCount = 0;

    for (let day = 1; day <= daysToPlunder; day ++) {
        gainCount += dailyGain;

        if (day % 3 === 0) {
            gainCount += dailyGain * 0.5;
        }

        if (day % 5 === 0) {
            gainCount *= 0.7;
        }
    }

    if (gainCount >= plunderGoal) {
        console.log(`Ahoy! ${gainCount.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (gainCount / plunderGoal) * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
plunderTrgetIsReached((["5", "40", "100"]));
plunderTrgetIsReached((["10", "20", "380"]));