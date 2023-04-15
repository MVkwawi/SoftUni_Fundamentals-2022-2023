function theBiscuitFactory(info) {
    //monthly biscuit supply + 3rd day is 75% of normal produce
    //format to lower number
    let biscuitsPerWorker = Number(info[0]);
    let workers = Number(info[1]);
    let monthlyBiscuitsCompanyTwo = Number(info[2]);

    let countBiscuits = 0;

    for (let i = 1; i <= 30; i++) {
        let dailyBiscuits = biscuitsPerWorker * workers;

        if (i % 3 === 0){
            dailyBiscuits = Math.trunc(dailyBiscuits * 0.75);
            countBiscuits += dailyBiscuits;
        } else {
            countBiscuits += dailyBiscuits;
        }
    }
    //compare the 30day produce of both companies -> turn it into %
    //print 30-day-num. and comparison-percentage%
    console.log(`You have produced ${countBiscuits} biscuits for the past month.`);

    let subtraction = Math.abs(monthlyBiscuitsCompanyTwo - countBiscuits);
    let percentage = (subtraction / monthlyBiscuitsCompanyTwo) * 100;
    
    if (countBiscuits > monthlyBiscuitsCompanyTwo) {    
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
    }
}
theBiscuitFactory(['163', '16', '67020']);