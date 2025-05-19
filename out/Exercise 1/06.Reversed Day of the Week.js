"use strict";
var Day;
(function (Day) {
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
    Day[Day["Sunday"] = 7] = "Sunday";
})(Day || (Day = {}));
function reversedDay(day) {
    const temp = day;
    if (!Day[temp]) {
        return "error";
    }
    return Day[temp];
}
console.log(reversedDay("Monday"));
console.log(reversedDay("Friday"));
console.log(reversedDay("Invalid"));
//# sourceMappingURL=06.Reversed%20Day%20of%20the%20Week.js.map