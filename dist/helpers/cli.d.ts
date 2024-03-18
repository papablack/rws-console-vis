import { Option } from '@inkjs/ui';
export type InkChoicesType = Option[];
export type InkChoiceValueType = Option;
export type InkParserType = <T>(elem: any) => T;
export default function select(choices: InkChoicesType, defaultVal?: string, parser?: InkParserType | null): Promise<string>;
