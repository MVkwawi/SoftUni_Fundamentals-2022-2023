function piccolo(carInfo) {
    let parking = {};

    for (const info of carInfo) {
        let [acction, carNum] = info.split(', ');

        switch(acction) {
            case 'IN': parking[carNum] = undefined; 
                break;
            case 'OUT': delete parking[carNum]; 
                break;
        }
    }

    if (Object.getOwnPropertyNames(parking).length === 0) {
        console.log('Parking Lot is Empty');
    } else {
    let sortedParking = Object.entries(parking).sort((a, b) => a[0].localeCompare(b[0]));
    let cars = sortedParking.map(a => a[0]);
    console.log(cars.join('\n'));
    }
} 
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);