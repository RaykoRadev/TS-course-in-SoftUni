function solve(num1: number, num2: number, num3: number): boolean {
    const sum = num1 + num2 + num3;

    console.log(sum);

    if (sum % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(solve(1, 2, 3));
console.log(solve(2, 2, 3));
