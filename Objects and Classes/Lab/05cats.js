function catsInfo(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let line of input) {
        let comment = line.split(" ")   // let [name, age] = line.split("   ")
        let name = comment[0];
        let age = comment[1];

        let cat = new Cat(name, age)
        cat.meow()
    }
}
catsInfo(['Mellow 2', 'Tom 5'])