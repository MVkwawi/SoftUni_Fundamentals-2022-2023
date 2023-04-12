function gladiatorInventory(info) {
    let inventory = info.shift();

    for (const line of info) {
        let [command, inventoryToChange] = line.split(' ');

    }
    switch (command) {
        case 'Buy': 
            if (!inventory.includes(inventoryToChange)) {
                inventory.push(inventoryToChange);
            }
            break;
        case 'Trash': 
            if (inventory.includes(inventoryToChange)) {
                let inventoryIndex = inventory.indexOf(inventoryToChange);
                inventory.splice(inventoryIndex, 1);
            }
            break;
        case 'Repair': 
            if (inventory.includes(inventoryToChange)) {
                let inventoryIndex = inventory.indexOf(inventoryToChange);
                inventory.splice(inventoryIndex, 1);
                inventory.push(inventoryToChange);
            }
            break;
        case 'Upgrade': 
            let [newItem, upgr] = inventoryToChange.split('-');

            if (inventory.includes(newItem)) {
                inventory[newItem] = newItem + ':' + upgr;
            }
            break;
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
);
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
);