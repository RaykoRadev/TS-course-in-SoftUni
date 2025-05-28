interface Animal {
    makeSound(): string;
}

class Dog implements Animal {
    makeSound(): string {
        return "Woof";
    }
}

const dog = new Dog();
console.log(dog.makeSound());

class Cat implements Animal {
    makeSound(): string {
        return "Meow";
    }
}

const cat = new Cat();
console.log(cat.makeSound());
