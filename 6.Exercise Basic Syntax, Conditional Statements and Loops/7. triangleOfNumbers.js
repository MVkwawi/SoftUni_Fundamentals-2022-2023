function triangleOfNumbers(num) {
    
    let currentNum = 1;

    for(let i = 1; i <= num; i++) {
        let row = '';

        for(let j = 1; j <= i; j++) {
            row += `${i} `;
        }
        console.log(row);
    }
    
}
triangleOfNumbers(5)