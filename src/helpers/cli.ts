import { prompt } from 'enquirer';

type CliChoice<T> = { name: string, value: T, message: string }
type CliChoices<T> = CliChoice<T>[];
type CliValParserType<T> = (...params: any[]) => T;

export async function select<T extends string | null | number | boolean = string>(
    keyName: string,
    question: string,
    choiceVals: CliChoices<T>, 
    defaultVal?: string, 
    parser: CliValParserType<T> = (x: T): T => x): Promise<T | null>
{
    const res: { selectValue: string } = await prompt([{
        type: 'select',
        name: 'selectValue',
        message: question,        
        choices: choiceVals
    }]);

    const picked = choiceVals.find(it => it.name === res.selectValue) 

    return picked ? parser(picked.value) : null;   
}