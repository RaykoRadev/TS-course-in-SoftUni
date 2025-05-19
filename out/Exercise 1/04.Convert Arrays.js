"use strict";
function convertArray(arr) {
    let temp = "";
    for (const element of arr) {
        temp += element;
    }
    return [temp, temp.length];
}
console.log(convertArray(["How", "are", "you?"]));
console.log(convertArray(["Today", " is", " a ", "nice", " ", "day for ", "TypeScript"]));
//# sourceMappingURL=04.Convert%20Arrays.js.map