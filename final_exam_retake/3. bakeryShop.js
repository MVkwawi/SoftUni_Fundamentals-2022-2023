function bakeryShop(input) {
  let atStorage = {};

  let soldFoodCounter = 0;

  let currentLine = input.shift();
  while (currentLine !== "Complete") {
    let [command, quantity, food] = currentLine.split(" ");
    quantity = Number(quantity);

    switch (command) {
      case "Receive":
        if (quantity > 0) {
          if (!atStorage[food]) {
            atStorage[food] = quantity;
          } else {
            atStorage[food] += quantity;
          }
        }
        break;
      case 'Sell':
          if (!atStorage[food]) {
            console.log(`You do not have any ${food}.`);
          } else {
            if (atStorage[food] >= quantity) {
                atStorage[food] -= quantity;
                console.log(`You sold ${quantity} ${food}.`);
                soldFoodCounter += quantity;

                if (atStorage[food] <= 0) {
                    delete atStorage[food];
                }
            } else {
                soldFoodCounter += atStorage[food];
                console.log(`There aren\'t enough ${food}. You sold the last ${atStorage[food]} of them.`);
                delete atStorage[food];
            }
          }
      break;
    }
    currentLine = input.shift();
  }

  for (const key in atStorage) {
    console.log(`${key}: ${atStorage[key]}`);
  }

  console.log(`All sold: ${soldFoodCounter} goods`);
}

bakeryShop(["Receive 10 muffins",
"Receive 23 bagels",
"Sell 5 muffins",
"Sell 10 bagels",
"Complete"]);

bakeryShop(["Receive 105 cookies",
"Receive 10 donuts",
"Sell 10 donuts",
"Sell 1 bread",
"Complete"]);

