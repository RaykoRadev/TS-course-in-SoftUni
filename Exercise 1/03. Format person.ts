// type predifinedTuple = [name: string, age: number];

function personSomething(input: (string | number)[]): string {
    let predifinedTuple: [string, number];
    let result: string = "";

    // if (input: predifinedTuple) {
    //     result = `Hello, my name is ${input[0]} and my age is ${input[1]}`;
    // } else {
    //     result = "TS Error";
    // }
    console.log(result);

    return result;
}
personSomething(["Ivan", 20]);
personSomething(["Joro", 30]);
personSomething(["Ivan", 20, "Ivanov"]);
personSomething(["Joro", "25"]);
personSomething([]);
