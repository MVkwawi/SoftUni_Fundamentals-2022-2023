function bitcoinMining(input) {

    const bitcoinPrise = 11949.16;
    const goldPrisePerGram = 67.51;
    const inputLength = input.length;

    let bitcoinCounter = 0;

    let dayCounter = 0;
    let dayOfFirstBitcoin = 0;

    let money = 0;

    for (let i = 0; i < inputLength; i ++) {
        let dailyGold = input[i];
        dayCounter += 1;

        if (dayCounter % 3 === 0) {
            dailyGold *= 0.7;
            money += goldPrisePerGram * dailyGold;
        } else {
            money += goldPrisePerGram * dailyGold;
        }

        while (money >= bitcoinPrise) {
            if (bitcoinCounter < 1) {
            dayOfFirstBitcoin = dayCounter;
            }
            money -= bitcoinPrise;
            bitcoinCounter ++; 
        }
    }

    console.log(`Bought bitcoins: ${bitcoinCounter}`);
    if (bitcoinCounter >= 1) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
// bitcoinMining([100, 200, 300]);

// bitcoinMining([50, 100]);

bitcoinMining([3124.15, 504.212, 2511.124]);