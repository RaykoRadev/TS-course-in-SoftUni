function convertArray(arr: string[]): [string, number] {
    let temp: string = "";
    for (const element of arr) {
        temp += element;
    }

    return [temp, temp.length];
}

console.log(convertArray(["How", "are", "you?"]));
console.log(
    convertArray(["Today", " is", " a ", "nice", " ", "day for ", "TypeScript"])
);
