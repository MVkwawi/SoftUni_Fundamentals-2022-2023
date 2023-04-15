function vacation(num, type, day) {
    let price = 0;

    switch (type) {
        case "Students":
            if (day === "Friday") {
                price = num * 8.45;
            } else if (day === "Saturday") {
                price = num *  9.80;
            } else if (day === "Sunday") {
                price = num *  10.46;
            }

            if (num >= 30) {
                price = price * 0.85;
            }

            break;
        case "Business":
            if (day === "Friday") {
                price = 10.90;
            } else if (day === "Saturday") {
                price = 15.60;
            } else if (day === "Sunday") {
                price = 16;
            }

            if (num >= 100) {
                num -= 10;
            }
            price = price * num;

            break;
        case "Regular":
            if (day === "Friday") {
                price = num *  15;
            } else if (day === "Saturday") {
                price = num *  20;
            } else if (day === "Sunday") {
                price = num *  22.50;
            }

            if (num >= 10 && num <= 20) {
                price *= 0.95;
            }
            break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30,
    "Students",
    "Sunday"
    
    )