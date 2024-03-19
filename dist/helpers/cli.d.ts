type CliChoice = {
    name: string;
    value: string;
    message: string;
};
type CliChoices = CliChoice[];
type CliValParserType<T> = (...params: any[]) => T;
export declare function select<T extends string | null | number | boolean = string>(keyName: string, question: string, choiceVals: CliChoices, defaultVal?: string, parser?: CliValParserType<T>): Promise<T | null>;
export {};
