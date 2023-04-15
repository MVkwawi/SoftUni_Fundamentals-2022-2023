function integerAndFloat (numOne, numTwo, numThree){
    let sum = numOne + numTwo + numThree;
    
    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum);
}
integerAndFloat(9, 100, 1.1)