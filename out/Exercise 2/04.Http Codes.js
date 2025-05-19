"use strict";
function httpCode(arg) {
    if (arg.printChars) {
        let temp = arg.text.slice(0, arg.printChars);
        console.log(temp);
        return temp;
    }
    console.log(arg.text);
    return arg.text;
}
httpCode({ code: 200, text: "OK" });
httpCode({ code: 201, text: "Created" });
httpCode({ code: 400, text: "Bad Request", printChars: 4 });
httpCode({ code: 404, text: "Not Found" });
httpCode({ code: 404, text: "Not Found", printChars: 3 });
httpCode({ code: 500, text: "Internal Server Error", printChars: 1 });
//# sourceMappingURL=04.Http%20Codes.js.map