function nXnMatrix(number) {

    let rowGenerator = () => {
        let row = '';
        for (let i = 0; i < number; i ++) {
            row += `${number} `;
        }
        return row;
    }

    for (let j = 0; j < number; j ++) {
        console.log(rowGenerator());
    }
    
    
}
nXnMatrix(7);