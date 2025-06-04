type SelectFunctions<T> = {
    [Key in keyof T]: T[Key] extends Function ? Key : never;
}[keyof T];

type AllFunctions<T> = Pick<T, SelectFunctions<T>>;

type test1 = {
    name: string;
    age: number;
    test: () => string;
};

type extracted1 = AllFunctions<test>;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
type Employee1 = {
    name: string;
    salary: number;
    work: () => void;
    takeBreak: () => string;
};

type extracted2 = AllFunctions<Employee>;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
type Nope = {
    name: string;
};

type extracted3 = AllFunctions<Nope>;
