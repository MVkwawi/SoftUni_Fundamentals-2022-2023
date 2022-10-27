function sumEvenNumbers(numbers) {
    let sumOfEvenNum = 0;

    for(let textNumber of numbers){
        let number = Number(textNumber);

        if(number % 2 === 0) {
            sumOfEvenNum += number;
        }
    }
    console.log(sumOfEvenNum);
}
sumEvenNumbers(['1','2','3','4','5','6'])