function equalArray(arrOne, arrTwo) {
    let sumArrayOne = 0;
    let differentIndex = 0;
    let identical = true;

    for(let i = 0; i < arrOne.length; i ++) {
        let currentNumArrayOne = Number(arrOne[i]);
        let currentNumArrayTwo = Number(arrTwo[i]);
        let index = i;
        
        if(currentNumArrayOne === currentNumArrayTwo) {
            sumArrayOne += currentNumArrayOne;
        } else {
            differentIndex = index;
            identical = false; 
            break;
        }
    }

    if(identical) {
        console.log(`Arrays are identical. Sum: ${sumArrayOne}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${differentIndex} index`);
    }
    
}
equalArray(['1'], ['10']);