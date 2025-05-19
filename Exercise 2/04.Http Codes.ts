type obj = {
    code: number;
    text: string;
    printChars?: number;
};

function httpCode(arg: obj): string {
    if (arg.printChars) {
        let temp: string = arg.text.slice(0, arg.printChars);
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
