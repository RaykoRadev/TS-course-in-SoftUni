enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}
function daysOfTheweek(num: number): void {
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
