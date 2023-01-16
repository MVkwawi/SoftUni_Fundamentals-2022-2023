function addAndRemove(arr) {
    let currentNum = 1;
    let myArr = [];
    let myArrLength = myArr.length;

    for (const el of arr) {
        switch (el) {
            case 'add': myArr.push(currentNum); break;
            case 'remove': myArr.splice(myArrLength - 1, 1); break;
        }

        currentNum ++;
    }

    if (myArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(myArr.join(' '));
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);