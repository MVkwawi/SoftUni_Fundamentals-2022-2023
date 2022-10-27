function evenAndOddDifference(numbers) {
    let evenSum = 0;
    let oddSum = 0;
    
    for(let number of numbers) {
        if(number % 2 === 0) {
            evenSum += number;
        } else {
            oddSum += number;
        }
    }
    let difference = evenSum - oddSum;
    console.log(difference);
}
evenAndOddDifference([1,2,3,4,5,6]);