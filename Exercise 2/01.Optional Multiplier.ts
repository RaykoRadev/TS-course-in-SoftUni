function optionalMultiplier(
    arg1?: number | string,
    arg2?: number | string,
    arg3?: number | string
): number {
    // const num1 = arg1 == undefind ? 1 : Number(arg1);   //* same for the rest and without gard function
    const num1 = gard(arg1);
    const num2 = gard(arg2);
    const num3 = gard(arg3);

    console.log(num1 * num2 * num3);

    return num1 * num2 * num3;
}

optionalMultiplier("3", 5, "10");
optionalMultiplier("2", "2");
optionalMultiplier(undefined, 2, 3);
optionalMultiplier(7, undefined, "2");
optionalMultiplier();

function gard(arg: number | string | undefined): number {
    if (typeof arg === "string") {
        return Number(arg);
    }

    if (typeof arg === "undefined") {
        return 1;
    }

    return arg;
}
