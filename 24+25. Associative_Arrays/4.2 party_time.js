// function guestList(array) {
//     let regularGuestList = new Set();
//     let vipGuestList = new Set();
//     let isParty = false;

//     for (const str of array) {
//         if (str === 'PARTY') {
//             isParty = true;
//             continue;
//         }

//         if(isParty) {
//             if (vipGuestList.has(str)) {
//                 vipGuestList.delete(str);
//             } else if (regularGuestList.has(str)) {
//                 regularGuestList.delete(str);
//             }
//         } else {
//             if (str[0] >= 0 && str[0] <= 9) {
//                 vipGuestList.add(str);
//             } else {
//                 regularGuestList.add(str);
//             }
//         }
//     }

//     let didNotAttend = [...vipGuestList, ...regularGuestList];
//     let count = didNotAttend.length;
//     console.log(count);
//     didNotAttend.forEach((a) => console.log(a));
// }

function guestList(array) {
    let vip = [];
    let regular = [];
    let isParty = false;

    for (const str of array) {
        if (str === 'PARTY') {
            isParty = true;
            continue;
        }

        if (isParty) {
            if (str[0] >= 0 || str[0] <= 9) {
                let index = vip.indexOf(str);
                vip.splice(index, 1);
            } else {
                let index = regular.indexOf(str);
                regular.splice(index, 1);
            }
        } else {
            if (str[0] >= 0 || str[0] <= 9) {
                vip.push(str);
            } else {
                regular.push(str);
            }
        }
    }

    let didNotArrive = vip.length + regular.length;
    console.log(didNotArrive);
    vip.forEach((a) => console.log(a));
    regular.forEach((a) => console.log(a));
}
guestList(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
);
guestList(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
);