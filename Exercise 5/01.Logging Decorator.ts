function logThat(
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
) {
    const originalFUnk = descriptor.value;

    descriptor.value = function (...arg: any[]) {
        console.log(
            `Function '${propertyName}' called with arguments: ${arg[0]}, ${arg[1]}`
        );

        return originalFUnk.apply(this, arg);
    };

    return descriptor;
}

class Person1 {
    fName: string;
    lName: string;

    constructor(fName: string, lName: string) {
        this.fName = fName;
        this.lName = lName;
    }

    @logThat static getFullName(firstN: string, lastN: string): string {
        return `${firstN} ${lastN}`;
    }
}

let person1 = new Person1("John", "Does");
Person1.getFullName(person1.fName, person1.lName);
Person1.getFullName("Benny", "Tres");
