interface ExtraParts {
    partName: string;
    runDiagnostics(): string;
}

interface CarBody extends ExtraParts {
    material: string;
    state: string;
}

interface Tires extends ExtraParts {
    airPressure: number;
    condition: string;
}

interface Engine extends ExtraParts {
    horsepower: number;
    oilDensity: number;
}

function createCar(arg1: CarBody, arg2: Tires, arg3: Engine) {
    // some magic activities
}

function runDiagnostics(): string {
    let partName: string = "";
    return partName;
}

createCar(
    {
        material: "aluminum",
        state: "scratched",
        partName: "Car Body",
        runDiagnostics,
    },
    {
        airPressure: 30,
        condition: "needs change",
        partName: "Tires",
        runDiagnostics,
    },
    { horsepower: 300, oilDensity: 780, partName: "Engine", runDiagnostics }
);
