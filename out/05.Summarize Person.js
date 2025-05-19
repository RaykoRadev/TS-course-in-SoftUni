"use strict";
function summary(id, fName, lastName, age, middleName, hobbies, workInfo) {
    //* if / else can be replaced by ternaren operator
    let fullname = "";
    if (typeof middleName === "undefined") {
        fullname = `${fName} ${lastName}`;
    }
    else {
        fullname = `${fName} ${middleName} ${lastName}`;
    }
    let hobbiesStr = "";
    if (typeof hobbies === "undefined") {
        hobbiesStr = "-";
    }
    else {
        hobbiesStr = hobbies?.join(", ");
    }
    let jobSalaries = "";
    if (typeof workInfo === "undefined") {
        jobSalaries = "-";
    }
    else {
        jobSalaries = `${workInfo[0]} -> ${workInfo[1]}`;
    }
    return [id, fullname, age, hobbiesStr, jobSalaries];
}
console.log(summary(12, "Eliot", "Des", 20, "Braylen", ["tennis", "football", "hiking"], ["Sales Consultant", 2500]));
console.log(summary(20, "Mary", "Trent", 25, undefined, ["fitness", "rowing"]));
console.log(summary(21, "Joseph", "Angler", 28));
console.log(summary(21, "Kristine", "Neva", 23, ""));
//# sourceMappingURL=05.Summarize%20Person.js.map