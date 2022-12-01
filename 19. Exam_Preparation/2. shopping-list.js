function shoppingList(arr) {
    let updatedShoppingList = arr.shift().split('!');

    for (let i = 0; i < arr.length; i ++) {
        let currentEl = arr[i].split(' ');

        let command = currentEl[0];
        let secondEl = currentEl[1];
        let thirdEl = currentEl[2];

        let includedInUpdtShoppingList = updatedShoppingList.includes(secondEl);

        switch (command) {
            case 'Urgent': 
                if (!includedInUpdtShoppingList) {
                    updatedShoppingList.unshift(secondEl);
                }
                break;
            case 'Unnecessary': 
                if (includedInUpdtShoppingList) {
                    let indexToRemove = updatedShoppingList.indexOf(secondEl);
                    updatedShoppingList.splice(indexToRemove, 1);
                }
                break;
            case 'Correct': 
                if (includedInUpdtShoppingList) {
                    let indexToChange = updatedShoppingList.indexOf(secondEl);
                    updatedShoppingList.splice(indexToChange, 1, thirdEl);
                }
                break;
            case 'Rearrange': 
                if (includedInUpdtShoppingList) {
                    let indexToChange = updatedShoppingList.indexOf(secondEl);
                    let elToBePushed = updatedShoppingList.splice(indexToChange, 1);
                    updatedShoppingList.push(elToBePushed);
                }
                break;
        }

        if (command === 'Go Shopping!') {
            break;
        }
    }
    console.log(updatedShoppingList.join(', '));  
}
shoppingList((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]));
shoppingList((["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]));