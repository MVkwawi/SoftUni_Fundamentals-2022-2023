function poundsToDollars(pounds) {
    const onePoundDollar = 1.31;
    let dollars = pounds * onePoundDollar;
    
    console.log(dollars.toFixed(3));
}
poundsToDollars(80)