function modifyNumber (num) {
    while (getAvg(num) < 5) {
        num += '9';
    }

    function getAvg(num) {
        function getSum(num) {
            let numToString = num.toString();
            let sum = 0;
            for (let i = 0; i < numToString.length; i++) {
                sum += Number(numToString[i]);
            }
            return sum;
        }

        let averageNumber = getSum(num) / num.toString().length;
        return averageNumber;
    }

    console.log(num);
}
modifyNumber(101);
modifyNumber(5835);