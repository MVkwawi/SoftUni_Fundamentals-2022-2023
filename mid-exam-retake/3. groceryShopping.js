function shoppingList(input) {
    let resultList = input.shift().split('|');

    for (const line of input) {
        let [command, productOne, productTwo] = line.split('%');
        
        if (command === 'Shop!') {
            break;
        }

        let indexOfProductOne = resultList.indexOf(productOne);
        let indexOfProductTwo = resultList.indexOf(productTwo);
        
        switch (command) {
            case 'Important': 
            if (resultList.includes(productOne)) {
                let productToUnshift = resultList.splice(indexOfProductOne, 1);
                resultList.unshift(productToUnshift);
            } else {
                resultList.unshift(productOne);
            }
            break;
            case 'Add': 
            if (resultList.includes(productOne)) {
                console.log('The product is already in the list.');
            } else {
                resultList.push(productOne);
            }
            break;
            case 'Swap': 
            if (resultList.includes(productOne) && resultList.includes(productTwo)) {
                resultList.splice(indexOfProductOne, 1, productTwo);
                resultList.splice(indexOfProductTwo, 1, productOne);

            } else {
                if (!resultList.includes(productOne)) {
                    console.log(`Product ${productOne} missing!`);
                }
                if (!resultList.includes(productTwo)) {
                    console.log(`Product ${productTwo} missing!`);
                }
            }
            break;
            case 'Remove': 
            if (resultList.includes(productOne)) {
                resultList.splice(indexOfProductOne, 1);
            } else {
                console.log(`Product ${productOne} isn't in the list.`);
            }
            break;
            case 'Reversed': 
            let resultListLength = resultList.length;
            for (let i = 0; i < resultListLength; i ++) {
                let currentItem = resultList.splice(i, 1);
                resultList.unshift(currentItem);
            }
            break;
        }
    }
    let currentNumOfItem = 1;
    for (const item of resultList) {
        console.log(`${currentNumOfItem}. ${item}`);
        currentNumOfItem ++;
    }
}
// shoppingList(["eggs|milk|bread|fish",
// "Important%bread",
// "Swap%eggs%tomato",
// "Shop!"]);

// shoppingList((["apple|cheese|salt|bananas",
// "Remove%cheese",
// "Swap%salt%bananas",
// "Shop!"])
// );

shoppingList(["kiwi|paper|coffee",
"Add%coffee",
"Important%bread",
"Shop!"]);
