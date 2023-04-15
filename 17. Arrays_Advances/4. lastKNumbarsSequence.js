function lastKNumbarsSequence(length, k) {
    let newArray = [1];

    for (let i = 1; i < length; i ++) {
        //the current index form which we have to start 
        //we use Math.max to choose the largest integer
        //here we find the last index considering 'k'
        let currentIndex = Math.max(newArray.length - k, 0);

        //we create new array with the 'k'number of elements
        //we start form the last index indicated in 'currentIndex'
        let lastElements = newArray.slice(currentIndex);
        let sum = 0;

        //here we go through the 'k'number of elements and sum them
        for(const element of lastElements) {
            sum += element;
        }
        newArray.push(sum);
    }

    console.log(newArray.join(' '));
}
lastKNumbarsSequence(6, 3);
lastKNumbarsSequence(8, 2);