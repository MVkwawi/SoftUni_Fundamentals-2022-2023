function listOfProducts(products) {
    //sort alphabetically
   // for some reason doesn't work in Judge -> let sortedProducts = products.sort((a, b) => a.localeCompare(b));
    let sortedProducts = products.sort();
    let productsLength = sortedProducts.length;
    
    for (let i = 0; i < productsLength; i ++) {

        console.log(`${i + 1}.${products[i]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);