"use strict";
function operator(param, operation, operand) {
    if (operation === "Index") {
        if (!notNumGard(param)) {
            console.log(param[operand]);
            return param[operand];
        }
    }
    else if (operation === "Length") {
        if (!notNumGard(param)) {
            console.log(param.length % operand);
            return param.length % operand;
        }
    }
    else {
        if (typeof param === "string") {
            param = Number(param);
        }
        else if (Array.isArray(param)) {
            return;
        }
        console.log(param + operand);
        return param + operand;
    }
}
function notNumGard(arg) {
    return typeof arg === "number";
}
operator(["First", "Second", "Third"], "Index", 1);
operator("string", "Index", 1);
operator(["Just", "Two"], "Length", 5);
operator("short string1", "Length", 5);
operator("7", "Add", 3);
operator(11, "Add", 3);
//# sourceMappingURL=02.Operator.js.map