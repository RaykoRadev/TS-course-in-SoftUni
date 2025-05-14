enum Day {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

function reversedDay(day: string) {
    const temp = day as keyof typeof Day;
    if (!Day[temp]) {
        return "error";
    }
    return Day[temp];
}

console.log(reversedDay("Monday"));
console.log(reversedDay("Friday"));
console.log(reversedDay("Invalid"));
