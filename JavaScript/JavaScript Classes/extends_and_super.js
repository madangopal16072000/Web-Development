class Pet {
    constructor(name, age) {
        console.log("IN PET CONSTRUCTOR");
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }

}

class Cat extends Pet{
    constructor(name, age, liveLeft = 9) {
        super(name, age);
        this.liveLeft = liveLeft;
        console.log("IN CAT CONSTRUCTOR!");
    }
    meow() {
        return 'Meoww!!';
    }
}

class Dog extends Pet{
    bark() {
        return 'bau bau';
    }
}