function manipulationOfArr(arr, commands) {
    let resultArr = arr;
    let commandsLength = commands.length;

    for (let i = 0; i < commandsLength; i ++) {
        let currentCommand = commands[i].split(' ');
        let commandType = currentCommand[0];

        switch (commandType) {
            case 'add': 
                let indexOfAdd = currentCommand[1];
                let elOfAdd = Number(currentCommand[2]);
                resultArr.splice(indexOfAdd, 0, elOfAdd);
            break;
            case 'addMany':
                let addManyIndex = currentCommand[1];
                let elsToAdd = currentCommand.slice(2).reverse().map(Number);
                for (let i = 0; i < elsToAdd.length; i ++) {
                    let currentEl = elsToAdd[i];
                    resultArr.splice(addManyIndex, 0, currentEl);
                }    
            break;
            case 'contains': 
                let elToSearch = Number(currentCommand[1]);
                if (!resultArr.includes(elToSearch)) {
                    console.log('-1');
                } else {
                    console.log(resultArr.indexOf(elToSearch));
                }
            break;
            case 'remove': 
                let indexToRemove = currentCommand[1];
                resultArr.splice(indexToRemove, 1);
            break;
            case 'shift': 
                let positionsToMove = Number(currentCommand[1]);
                for (let i = 0; i < positionsToMove; i ++) {
                    let elToMove = Number(resultArr.splice(0, 1));
                    resultArr.push(elToMove);
                }
            break;
            case 'sumPairs': 
                let sumedArr = [];
                let resultArrLength = resultArr.length / 2;
                for (let i = 0; i < resultArrLength; i ++) {
                    let firstNum = Number(resultArr.splice(0, 1));
                    let secondNum  = Number(resultArr.splice(0, 1));
                    let sum = firstNum + secondNum;
                    sumedArr.push(sum);
                }
                resultArr = sumedArr;
            break;
            case 'print': console.log(`[ ${resultArr.join(', ')} ]`);
        }

        if (commandType === 'print') {
            break;
        }
    }
}
manipulationOfArr([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);
manipulationOfArr([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);