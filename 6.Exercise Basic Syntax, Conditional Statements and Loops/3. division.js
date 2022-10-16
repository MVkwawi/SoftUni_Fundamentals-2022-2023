function division(num) {
    let divisor = 0;

    if (num % 10 === 0) {
        divisor = 10;
        console.log(`The number is divisible by ${divisor}`);
    } else if (num % 7 === 0) {
        divisor = 7;
        console.log(`The number is divisible by ${divisor}`);
    }  else if (num % 6 === 0) {
        divisor = 6;
        console.log(`The number is divisible by ${divisor}`);
    }  else if (num % 3 === 0) {
        divisor = 3;
        console.log(`The number is divisible by ${divisor}`);
    }  else if (num % 2 === 0) {
        divisor = 2;
        console.log(`The number is divisible by ${divisor}`);
    }  else {
        console.log("Not divisible");
    }


}
division(1643)