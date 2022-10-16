function oddNumbers(n) {
    
   let number = 1;
   let sum = 0;
   let cycle = 0;

   while (cycle < n) {
    console.log(number);
    sum = sum + number;
    number +=2;
    cycle ++;
   }

    console.log(`Sum: ${sum}`);
}
oddNumbers(3)

