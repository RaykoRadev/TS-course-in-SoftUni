type CheckingType<T> = T extends number ? number : string;

function conditionalNumber<T>(arg: CheckingType<T>): string {
    if (typeof arg === "number") {
        return arg.toFixed(2);
    }

    return String(arg);
}

console.log(conditionalNumber<number>(20.3555));
console.log(conditionalNumber<string>("wow"));
console.log(conditionalNumber<boolean>("a string"));

// console.log(conditionalNumber<boolean>(30));
// console.log(conditionalNumber<number>("test")); //TS error: type 'number' is not assignable to parameter of type 'string'
// //TS error: type 'string' is not assignable to parameter of type 'number'
