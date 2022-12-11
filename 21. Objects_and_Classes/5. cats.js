function createCats(array) {
    class Cat {
        constructor (name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const line of array) {
        let [name, age] = line.split(' ');

        let newCat = new Cat (name, age);

        newCat.meow();
    }
}

createCats(['Mellow 2', 'Tom 5']);
createCats(['Candy 1', 'Poppy 3', 'Nyx 2']);