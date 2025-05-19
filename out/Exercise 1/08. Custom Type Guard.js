"use strict";
// function isNotEmptyStringArray(arr: unknown): arr is string[] {
//     if (arr instanceof Array) {
//         if (arr.length > 0 && arr.every((el) => typeof el === "string")) {
//             console.log(true);
//             return true;
//         }
//     }
//     console.log(false);
//     return false;
// }
// isNotEmptyStringArray({});
// isNotEmptyStringArray({ test: "one" });
// isNotEmptyStringArray([]);
// isNotEmptyStringArray(undefined);
// isNotEmptyStringArray(null);
// isNotEmptyStringArray([12, 13]);
// isNotEmptyStringArray(["test", 123]);
// isNotEmptyStringArray(["a", "b", "c"]);
//~~~~ Alex's variant ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function isNonEmptyStringArray(arg) {
    return (Array.isArray(arg) &&
        arg.length >= 1 &&
        arg.every((el) => typeof el === "string"));
}
let arr = ["a", "b", "c"];
if (isNonEmptyStringArray(arr)) {
    console.log(arr.length); // allowed
}
//# sourceMappingURL=08.%20Custom%20Type%20Guard.js.map