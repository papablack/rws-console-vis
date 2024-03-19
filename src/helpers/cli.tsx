import { render, inkUi } from './ink';
type Option = typeof inkUi.Option;
const Select = inkUi.Select;

export type InkChoicesType = Option[];

export type InkChoiceValueType = Option;
export type InkParserType = <T>(elem: any) => T;

export default async function select(
    choices: InkChoicesType, 
    defaultVal?: string, 
    parser: InkParserType | null = null): Promise<string>
{
    return new Promise((resolve: (value: string) => void) => {
        render(<Select 
            defaultValue={defaultVal}
            options={choices}
            onChange={(newVal: string) => {
                resolve(newVal);
            }}
        />);
    });
}