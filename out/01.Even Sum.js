"use strict";
function solve(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    // console.log(sum);
    // if (sum % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return sum % 2 === 0;
}
console.log(solve(1, 2, 3));
console.log(solve(2, 2, 3));
//# sourceMappingURL=01.Even%20Sum.js.map