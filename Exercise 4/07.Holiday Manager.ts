enum TravelVacation {
    Abroad = "Abroad",
    InCountry = "InCountry",
}
enum MountainVacation {
    Ski = "Ski",
    Hiking = "Hiking",
}
enum BeachVacation {
    Pool = "Pool",
    Sea = "Sea",
    ScubaDiving = "ScubaDiving",
}
interface Holiday {
    set start(val: Date);
    set end(val: Date);
    getInfo(): string;
}
interface VacationManager<T, V> {
    reserveVacation(holiday: T, vacationType: V): void;
    listReservations(): string;
}

class PlannedHoliday implements Holiday {
    private _start!: Date;
    private _end!: Date;

    constructor(start: Date, end: Date) {
        this.start = start;
        this.end = end;
    }

    set start(val: Date) {
        if (val > this.end) {
            throw new Error("Invalid Date");
        }
        this._start = val;
    }

    set end(val: Date) {
        if (this.start > val) {
            throw new Error("Invalid Date");
        }
        this._end = val;
    }

    getInfo(): string {
        return `Holiday: ${this._start.getDate()}/${
            this._start.getMonth() + 1
        }/${this._start.getFullYear()} - ${this._end.getDate()}/${
            this._end.getMonth() + 1
        }/${this._end.getFullYear()}`;
    }
}

class HolidayManager<
    V extends Holiday,
    T extends TravelVacation | MountainVacation | BeachVacation
> implements VacationManager<V, T>
{
    private listOfHolidays: Map<V, T> = new Map();

    reserveVacation(holiday: V, vacationType: T): void {
        this.listOfHolidays.set(holiday, vacationType);
    }

    listReservations(): string {
        let result: string[] = [];

        Array.from(this.listOfHolidays).forEach((el) => {
            result.push(`${el[0].getInfo()} => ${el[1]}`);
        });

        return result.join("\n");
    }
}

let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2025, 3, 17));
let holidayManager = new HolidayManager<Holiday, TravelVacation>();
holidayManager.reserveVacation(holiday, TravelVacation.Abroad);
holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);
console.log(holidayManager.listReservations());
