enum Month {
    Jan = "January",
    Feb = "February",
    Mar = "March",
    Apr = "April",
    May = "May",
    Jun = "June",
    Jul = "July",
    Aug = "August",
    Sep = "September",
    Oct = "October",
    Nov = "November",
    Dec = "December",
}

function checkTheDay(arr: unknown[]): void {
    for (const el of arr) {
        if (el instanceof Date) {
            const temp = el.toString();
            const dateInArr: string[] = temp.split(" ");

            if (dateInArr[0] === "Fri" && dateInArr[2] === "13") {
                let shit = dateInArr[1] as keyof typeof Month;

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
