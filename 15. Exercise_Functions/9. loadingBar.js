function loadingBar(percent) {
    let percentCount = '%'.repeat(percent/10);
    let dotCoutn = '.'.repeat(10 - percentCount.length);

    if (percent === 100) {
        console.log('100% Complete!');
    } else if (percent < 100) {
        console.log(`${percent}% [${percentCount}${dotCoutn}]`);
        console.log('Still loading...');
    }
}
loadingBar(30);