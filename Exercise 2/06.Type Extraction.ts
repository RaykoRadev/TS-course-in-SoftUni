interface Names {
    fName: string;
    lName: string;
    age: number;
    getPersonInfo(): string;
}

interface Location {
    city: string;
    street: string;
    number: number;
    postalCode: number;
    getAddressInfo(): string;
}

function getPersonInfo(this: Names): string {
    return `${this.fName} ${this.lName}, age ${this.age}`;
}

function getAddressInfo(this: Location): string {
    return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`;
}

function createCombinedFunction(arg1: Names, arg2: Location) {
    return (person: Names & Location) =>
        `Hello, ${person.getPersonInfo()} from ${person.getAddressInfo()}`;
}

let names = {
    fName: "John",
    lName: "Doe",
    age: 22,
    getPersonInfo() {
        return `${this.fName} ${this.lName}, age ${this.age}`;
    },
};

let location1 = {
    city: "Boston",
    street: "Nowhere street",
    number: 13,
    postalCode: 51225,
    getAddressInfo() {
        return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`;
    },
};

let combinedFunction = createCombinedFunction(names, location);
let combinedPerson = Object.assign({}, names, location);
console.log(combinedFunction(combinedPerson));
