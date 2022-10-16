function namesOfDigits(num) {

    let lastNum = String(num).slice(-1);
    lastNum = Number(lastNum);
    
    if (lastNum ===  0) {
        console.log('zero');
    } else if (lastNum === 1) {
        console.log('one');
    } else if (lastNum === 2) {
        console.log('two');
    } else if (lastNum === 3) {
        console.log('three');
    } else if (lastNum === 4) {
        console.log('four');
    } else if (lastNum === 5) {
        console.log('five');
    } else if (lastNum === 6) {
        console.log('six');
    } else if (lastNum === 7) {
        console.log('seven');
    } else if (lastNum === 8) {
        console.log('eight');
    } else if (lastNum === 9) {
        console.log('nine');
    }
}

namesOfDigits(154)