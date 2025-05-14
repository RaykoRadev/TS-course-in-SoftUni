// let arr: unknown = true;
// if (isNotEmptyStringArray(arr)) {
//     console.log(arr.length);
// }

// type heck = string[]

function isNotEmptyStringArray(arr: unknown) {
    if (arr instanceof Array) {
        if (arr.length > 0 && arr.every((el) => typeof el === "string")) {
            console.log(true);
            return true;
        }
    }
    console.log(false);
    return false;
}

isNotEmptyStringArray({});
isNotEmptyStringArray({ test: "one" });
isNotEmptyStringArray([]);
isNotEmptyStringArray(undefined);
isNotEmptyStringArray(null);
isNotEmptyStringArray([12, 13]);
isNotEmptyStringArray(["test", 123]);
isNotEmptyStringArray(["a", "b", "c"]);
