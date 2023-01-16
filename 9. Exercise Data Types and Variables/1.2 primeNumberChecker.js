function isPrimeNum(num) {
    let isPrime = false;

    if (num % 2 ===0 || num % 3 ===0 || num % 5 === 0) {
        console.log(isPrime);
    } else {
        isPrime = true;
        console.log(isPrime);
    }
}
isPrimeNum(7);
isPrimeNum(8);
isPrimeNum(81);