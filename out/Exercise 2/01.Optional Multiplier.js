"use strict";
function optionalMultiplier(arg1, arg2, arg3) {
    const num1 = gard(arg1);
    const num2 = gard(arg2);
    const num3 = gard(arg3);
    console.log(num1 * num2 * num3);
    return num1 * num2 * num3;
}
optionalMultiplier("3", 5, "10");
optionalMultiplier("2", "2");
optionalMultiplier(undefined, 2, 3);
optionalMultiplier(7, undefined, "2");
optionalMultiplier();
function gard(arg) {
    if (typeof arg === "string") {
        return Number(arg);
    }
    if (typeof arg === "undefined") {
        return 1;
    }
    return arg;
}
//# sourceMappingURL=01.Optional%20Multiplier.js.map