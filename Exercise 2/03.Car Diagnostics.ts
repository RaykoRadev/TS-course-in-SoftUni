interface body {
    material: string;
    state: string;
}

interface tires {
    airPresure: number;
    condition: string;
}

interface engine {
    horspowers: number;
    oilDensity: number;
}

function solve(arg1: body, arg2: tires, arg3: engine) {}
// { material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics },
// { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics },
// { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics }
