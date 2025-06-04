function swap<T>(arr1: T[], index1: number, arr2: T[], index2: number): void {
    const temp: T = arr1[index1];
    arr1[index1] = arr2[index2];
    arr2[index2] = temp;
}

// let a = ["test", "123"];
// let b = ["a", "b", "c"];
// swap<string>(a, 0, b, 2);
// console.log(a);
// console.log(b);

let a = [20, 30, 40];
let b = [1, 2, 3, 4, 5];
swap<number>(a, 0, b, 2);
console.log(a);
console.log(b);
