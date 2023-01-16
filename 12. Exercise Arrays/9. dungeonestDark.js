function dungeonRun (arr) {
    let newArray = arr
                .shift()
                .split('|');

    const newArrayLength = newArray.length;

    let health = 100;
    let coins = 0;
    let room = 0;

    for (const line of newArray) {
        [text, num] = line.split(' ');
        num = Number(num);

        room ++;

        if (text === 'potion') {
            health += num;
            let healingNum = 0;

            if (health > 100) {
                healingNum = num - (health - 100);
                health = 100;
            } else {
                healingNum = num;
            }

            console.log(`You healed for ${healingNum} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (text === 'chest') {
            coins += num;
            console.log(`You found ${num} coins.`);

        } else { //monster vs. programmer!! Let the fight begin!
            health -= num; 
            
            if (health > 0) {
                console.log(`You slayed ${text}.`);
            } else {
                console.log(`You died! Killed by ${text}.`);
                console.log(`Best room: ${room}`);
                
                break;
            }
        }
    }

    if (room === newArrayLength) {
        console.log('You\'ve made it!');
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonRun(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);

//dungeonRun(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);