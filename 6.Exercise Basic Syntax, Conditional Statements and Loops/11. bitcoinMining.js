function bitcoinMining(dayGold) {

    const bitcoinPrise = 11949.16;
    const goldPrisePerGram = 67.51;

    let index = dayGold;
    
    let income = 0;
    let dayOfFirstBitcoin = 0;
    let currentDay = index[0];
    let bitcoins = 0;

    while (currentDay <= dayGold.length) {
        
        if (currentDay % 3 === 0) {
            dayGold * 0.7;
        }

        let result = dayGold * goldPrisePerGram;
        income + result; 

        if (income > bitcoinPrise) {
            income - bitcoinPrise;
            bitcoins += 1;
            dayOfFirstBitcoin = currentDay;  
        }
        
        index ++;
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    console.log(`Left money: ${income}`);
}
bitcoinMining([100, 200, 300])