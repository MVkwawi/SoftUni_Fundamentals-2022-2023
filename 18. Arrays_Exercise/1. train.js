function train(arr) {
    let wagons = arr.shift(0).split(' ').map(Number);
    let maxPassengersInWagon = Number(arr.shift(0));
    let arrLength = arr.length;

    for (let index = 0; index < arrLength; index ++) {
        let currentElement = arr[index].split(' ');

        if (currentElement[0] === 'Add') {
            let passengersInNewWagon = Number(currentElement[1]);
            wagons.push(passengersInNewWagon);
        } else {
            currentElement = Number(currentElement);
            for (let j = 0; j < wagons.length; j ++) {
                let passengersInWagonAdd = wagons[j] + currentElement;
                if (passengersInWagonAdd <= maxPassengersInWagon) {
                    wagons[j] += currentElement;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);

train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);