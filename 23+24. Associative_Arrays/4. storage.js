function storage (array) {
    let storage = new Map();

    for (const el of array) {
        let [product, quantity] = el.split(' ');
        quantity = Number(quantity);

        if (storage.has(product)) {
            quantity += storage.get(product);
        }

        storage.set(product, quantity);
    }

    for (const [product, quantity] of storage) {
        console.log(`${product} -> ${quantity}`);
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);