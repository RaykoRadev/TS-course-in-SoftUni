export function decorator1<T extends new (...arg: any[]) => {}>(
    constructor: T
) {
    return class extends constructor {
        private _offset = 3;
    };
}
export function decorator2(
    target: {},
    methodName: string,
    descriptor: PropertyDescriptor
) {}
export function decorator3(
    target: {},
    methodName: string,
    descriptor: PropertyDescriptor
) {}
export function decorator4<T extends {}>(
    constructor: T & { forbiddenSymbols: string[] }
) {
    const originalForbidenSymbols = constructor.forbiddenSymbols;
    constructor.forbiddenSymbols = [...originalForbidenSymbols, "'", '"'];
}
