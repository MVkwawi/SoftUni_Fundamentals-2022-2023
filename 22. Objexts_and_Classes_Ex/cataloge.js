function cataloge(products) {
    let productCataloge = {};

    products.sort((a,b) => a.localeCompare(b, undefined, { sensitivity: 'base'}));

    for (const product of products) {
        let [name, price] = product.split(' : ');
        let firstInitial = name[0].toUpperCase();

        if(!productCataloge[firstInitial]) {
            productCataloge[firstInitial] = [];
        }

        productCataloge[firstInitial].push({name, price});
    }

    let sortedInitials = Object.keys(productCataloge).sort();

    for (const initial of sortedInitials) {
        console.log(initial);

        for (const product of productCataloge[initial]) {
            console.log(`${product.name}: ${product.price}`);
        }
    }
}

cataloge([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]);
    
    

