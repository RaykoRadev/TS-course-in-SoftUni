interface AddDate extends User11 {
    createdOn?: Date;
}

@classDecorator
class User11 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayUserInfo() {
        console.log(`${this.name}, Age: ${this.age}`);
    }
}

function classDecorator(constructor: Function) {
    console.log(constructor.prototype);
}

const user11 = new User11("John Doe", 30);
user11.displayUserInfo();
console.log(user11);
console.log((user11 as any).createdOn);
