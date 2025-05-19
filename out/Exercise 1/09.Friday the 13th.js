"use strict";
var Month;
(function (Month) {
    Month["Jan"] = "January";
    Month["Feb"] = "February";
    Month["Mar"] = "March";
    Month["Apr"] = "April";
    Month["May"] = "May";
    Month["Jun"] = "June";
    Month["Jul"] = "July";
    Month["Aug"] = "August";
    Month["Sep"] = "September";
    Month["Oct"] = "October";
    Month["Nov"] = "November";
    Month["Dec"] = "December";
})(Month || (Month = {}));
function checkTheDay(arr) {
    for (const el of arr) {
        if (el instanceof Date) {
            const temp = el.toString();
            const dateInArr = temp.split(" ");
            if (dateInArr[0] === "Fri" && dateInArr[2] === "13") {
                let shit = dateInArr[1];
                console.log(`${dateInArr[2]}-${Month[shit]}-${dateInArr[3]}`);
            }
        }
    }
}
// checkTheDay([
//     {},
//     new Date(2025, 4, 13),
//     null,
//     new Date(2025, 5, 13),
//     "13-09-2023",
//     new Date(2025, 6, 13),
// ]);
checkTheDay([
    new Date(2024, 0, 13),
    new Date(2024, 1, 13),
    new Date(2024, 2, 13),
    new Date(2024, 3, 13),
    new Date(2024, 4, 13),
    new Date(2024, 5, 13),
    new Date(2024, 6, 13),
    new Date(2024, 7, 13),
    new Date(2024, 8, 13),
    new Date(2024, 9, 13),
    new Date(2024, 10, 13),
    new Date(2024, 11, 13),
]);
//# sourceMappingURL=09.Friday%20the%2013th.js.map