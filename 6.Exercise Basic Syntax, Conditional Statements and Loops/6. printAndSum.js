function printAndSum(startNum, endNum) {
    
    let row = '';
    let sum = 0;

    for(let i = startNum; i <= endNum; i++) {
        row += `${i} `;
        sum += i;  
    }

    console.log(row);
    console.log(`Sum: ${sum}`);

}
printAndSum(5, 10)