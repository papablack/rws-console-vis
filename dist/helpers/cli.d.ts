declare const inkUi: any;
type Option = typeof inkUi.Option;
export type InkChoicesType = Option[];
export type InkChoiceValueType = Option;
export type InkParserType = <T>(elem: any) => T;
export default function select(choices: InkChoicesType, defaultVal?: string, parser?: InkParserType | null): Promise<string>;
export {};
