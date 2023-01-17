function storeProvision(storage, delivery) {
    
    let inStorage = {}
    let storageLength = storage.length;
    let deliveryLength = delivery.length;

    for (let index = 0; index < storageLength; index +=2) {
        let currentProduct = storage[index];
        inStorage[currentProduct] = Number(storage[index + 1]);
    }

    for (let index = 0; index < deliveryLength; index +=2) {
        let deliveryProduct = delivery[index];

        if (!inStorage.hasOwnProperty(deliveryProduct)) {
            inStorage[deliveryProduct] = 0;
        }

        inStorage[deliveryProduct] += Number(delivery[index + 1]);
    }

    for (const key in inStorage) {
        console.log(`${key} -> ${inStorage[key]}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);

storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]);