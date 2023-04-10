function ladybirds (input) {

    let fieldNumber = input.shift();

    let ladybirdsInFieldIndexes = input
                        .shift()
                        .split(' ')
                        .map(Number);

    let fieldAndLadybirds = new Array(fieldNumber).fill(0);

    // Putting the bugs in their respective field positions
    for (const position of ladybirdsInFieldIndexes) {
        let currentBug = Number(position);
        if (currentBug < 0 || currentBug >= fieldNumber) {
            continue;
        }
        fieldAndLadybirds[currentBug] = 1;
    }

    //let us move the bugs by the command
    for (let i = 0; i < input.length; i ++) {
        [ladyIndex, command, flyLength] = input[i].split(' ');
        ladyIndex = Number(ladyIndex);
        flyLength = Number(flyLength);

        if (
            ladyIndex < 0 ||
            ladyIndex >= fieldAndLadybirds.length ||
            fieldAndLadybirds[ladyIndex] !== 1
        ) {
            continue;
        }

        fieldAndLadybirds[ladyIndex] = 0;

        if (command === 'left') {
            flyLength = - flyLength;
        }

        ladyIndex += flyLength;
        while (ladyIndex >= 0 && ladyIndex < fieldAndLadybirds.length) {
            if ( fieldAndLadybirds[ladyIndex] === 0) {
                fieldAndLadybirds[ladyIndex] = 1;
                break;
            }
            ladyIndex += flyLength;
        }
    }

    console.log(fieldAndLadybirds.join(' '));
}
ladybirds([ 
3, 
'0 1',
'0 right 1',
'2 right 1' 
]);

ladybirds([ 3, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1']);