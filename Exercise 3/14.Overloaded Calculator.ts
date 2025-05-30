class Calculator {
    calculate(operation: "power" | "log", arg1: number, arg2: number): number;
    calculate(
        operation: "add" | "subtract" | "multiply" | "divide",
        arg1: number,
        arg2: number,
        arg3?: number,
        arg4?: number
    ): number;
    calculate(
        operation: "power" | "log" | "add" | "subtract" | "multiply" | "divide",
        arg1: number,
        arg2: number,
        arg3?: number,
        arg4?: number
    ): number {
        const nums = [arg1, arg2, arg3, arg4].filter(
            (num) => typeof num === "number"
        );

        const calc = {
            power: () => arg1 ** arg2,
            log: () => {
                if (arg1 <= 0 || arg2 <= 0)
                    throw new Error("Invalid log values");
                return Math.log(arg1) / Math.log(arg2);
            },
            add: () => nums.reduce((ac, val) => ac + val, 0),
            subtract: () => nums.reduce((ac, val) => ac - val),
            multiply: () => nums.reduce((ac, val) => ac * val),
            divide: () => nums.reduce((ac, val) => ac / val),
        };

        return calc[operation]();
    }
}

const calc = new Calculator();
console.log(calc.calculate("power", 2, 3));
console.log(calc.calculate("power", 4, 1 / 2));
console.log(calc.calculate("log", 8, 2));
console.log(calc.calculate("add", 10, 5));
console.log(calc.calculate("add", 10, 5, 3));
console.log(calc.calculate("subtract", 10, 5));
console.log(calc.calculate("multiply", 2, 3, 4));
console.log(calc.calculate("divide", 100, 5, 2, 2));

// const calc = new Calculator();
// console.log(calc.calculate('power', 2, 3, 2));
// console.log(calc.calculate('add', 2));
// console.log(calc.calculate('log', 2, 3, 4, 5));
// console.log(calc.calculate('multiply', 2, 3, 4, 5, 6));
