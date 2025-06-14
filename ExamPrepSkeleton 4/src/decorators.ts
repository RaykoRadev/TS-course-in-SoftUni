export function decorator1<T extends new (...arg: any[]) => {}>(
    constructor: T
) {
    return class extends constructor {
        protected _offset: number = 3;
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

export function decorator4<T extends abstract new (...arg: any[]) => {}>(
    constructor: T
) {
    abstract class decorateOriginalClass extends constructor {
        public static forbiddenSymbols: string[] = [
            "_",
            ",",
            ".",
            "!",
            "?",
            "-",
            ";",
            " ",
            "'",
            '"',
        ];
    }
    return decorateOriginalClass;
}
