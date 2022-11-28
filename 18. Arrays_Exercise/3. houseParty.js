function atendingGuests(arr) {
    let guestArr = [];

    for (const el of arr) {
        let currentEl = el.split(' ');
        let name = currentEl[0];

        if (currentEl.length === 3) {
            if (!guestArr.includes(name)) {
                guestArr.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (guestArr.includes(name)) {
                let index = guestArr.indexOf(name);
                guestArr.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guestArr.join('\n'));
}
atendingGuests(['Allie is going!', 
                'George is going!', 
                'John is not going!', 
                'George is not going!']);
atendingGuests(['Tom is going!',
                'Annie is going!',
                'Tom is going!',
                'Garry is going!',
                'Jerry is going!']);