function movingTargets(info) {
    let targets = info
        .shift()
        .split(' ')
        .map(Number);
   
    
    let currentLine = info.shift();

    while (currentLine !== 'End') {
        let [command, index, power] = currentLine.split(' ');
        index = Number(index);
        power = Number(power);

        switch (command) {
            case 'Shoot': 
                if (targets[index]) {
                targets[index] -= power;
                }
                if (targets[index] <= 0) {
                  targets.splice(index, 1);
                }
                break;
            case 'Add': 
                if (targets[index]) {
                targets.splice(index, 0, power);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike': 
                let powerBefore = index - power;
                let powerAfter = index + power;

                if (targets[powerBefore] && targets[powerAfter]) {
                    targets.splice(powerBefore, power * 2 + 1);
                } else {
                    console.log('Strike missed!');
                }
                break;
        }
      currentLine = info.shift();
    }
    
    console.log(targets.join('|'));
}
movingTargets(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]);
movingTargets((["1 2 3 4 5",
                "Strike 0 1",
                "End"]));