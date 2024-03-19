type CliChoice<T> = {
    name: string;
    value: T;
    message: string;
};
type CliChoices<T> = CliChoice<T>[];
type CliValParserType<T> = (...params: any[]) => T;
export declare function select<T extends string | null | number | boolean = string>(keyName: string, question: string, choiceVals: CliChoices<T>, defaultVal?: string, parser?: CliValParserType<T>): Promise<T | null>;
export {};
