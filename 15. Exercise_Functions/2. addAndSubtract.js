// with nested functions
function addAndSubtract(numOne, numTwo, numThree) {
    
    function add (numOne, numTwo) {
        return numOne + numTwo;
    }
    let sum = add(numOne, numTwo); 

    function subtract (sum, numThree) {
        return sum - numThree;
    }
    let result = subtract(sum, numThree);

    console.log(result);
}
addAndSubtract(1, 17, 30);