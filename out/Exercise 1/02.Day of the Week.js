"use strict";
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
function daysOfTheweek(num) {
    // if (!Days[num]) {
    //     console.log("error");
    //     return;
    // }
    // console.log(Days[num]);
    console.log(Days[num] || "error");
}
daysOfTheweek(1);
daysOfTheweek(5);
daysOfTheweek(-1);
//# sourceMappingURL=02.Day%20of%20the%20Week.js.map