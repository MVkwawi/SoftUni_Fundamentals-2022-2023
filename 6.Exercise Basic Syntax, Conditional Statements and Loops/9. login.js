function login(input) {
    let username = input[0];
    let password = username.split('').reverse().join('');

    let current = 1;
    let arrayLength = input.length;
    let incorrectCount = 0;
   // let index = 1;

    while (current <= arrayLength) {
        let currentString = input[current];

        if (currentString === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            incorrectCount ++;

            if (incorrectCount === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }

            console.log('Incorrect password. Try again.');
        }
       // currentString++;
        current ++;
    }
    
}
login(['sunny','rainy','cloudy','sunny','not sunny'])