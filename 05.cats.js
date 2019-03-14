function cats(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says meow`);
        }
    }
    let cats = [];

    for (let i = 0; i < array.length; i++) {
        let catData = array[i].split(' ');
        let [name, age] = [catData[0], catData[1]];
        cats.push(new Cat(name, age));
    }
    
    cats.forEach(cat => cat.meow());


}

cats(['Mellow 2', 'Tom 5'])