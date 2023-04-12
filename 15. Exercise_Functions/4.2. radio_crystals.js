function radioCrystal(arr) {
    let targetSize = arr.shift();
    
    for (const crystal of arr) {
        let size = crystal;
        console.log(`Processing chunk ${size} microns`);

        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;

        while (size !== targetSize) {
            while (size / 4 >= targetSize) {
                size = cut(size);
                cutCount ++;
            }
            if (cutCount > 0) {
                console.log(`Cut x${cutCount}`);
                console.log(`Transporting and washing`);
                size = transportWash(size);
            }

            while (size * 0.8 >= targetSize) {
                size = lap(size);
                lapCount ++;
            }
            if (lapCount > 0) {
                console.log(`Lap x${lapCount}`);
                console.log(`Transporting and washing`);
                size = transportWash(size);
            }

            while (size - 20 >= targetSize) {
                size = grind(size);
                grindCount ++;
            }
            if (grindCount > 0) {
                console.log(`Grid x${grindCount}`);
                console.log('Thansporting and washing');
                size = transportWash(size);
            }

            while (size - 2 >= targetSize - 1) {
                size = etch(size);
                etchCount ++;
            }
            if (etchCount > 0) {
                console.log(`Etch x${etchCount}`);
                console.log('Transporting and washing');
                size = transportWash(size);
            }

            if (size < targetSize) {
                //xRay is done only once!!!
                size = xRay(size);
                console.log('X-ray x1');
            }
            
        }
        console.log(`Finished crystal ${targetSize} microns`);
    }
}

let cut = (size) => {
    let returnSize = size / 4;
    return returnSize;
}
let lap = (size) => {
    let returnSize = size * 0.8;
    return returnSize;
}
let grind = (size) => {
    let returnSize = size - 20;
    return returnSize;
}
let etch = (size) => {
    let returnSize = size - 2;
    return returnSize;
}
// //can only be done once
let xRay = (size) => {
    let returnSize = size + 1;
    return returnSize;
}
let transportWash = (size) => {
    let returnSize = Math.floor(size);
    return returnSize;
}

radioCrystal([1375, 50000]);
// radioCrystal([1000, 4000, 8100]);
