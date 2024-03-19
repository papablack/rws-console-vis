import { prompt } from 'enquirer';

type CliChoice = { name: string, value: string, message: string }
type CliChoices = CliChoice[];
type CliValParserType<T> = (...params: any[]) => T;

export async function select<T extends string | null | number | boolean = string>(
    keyName: string,
    question: string,
    choiceVals: CliChoices, 
    defaultVal?: string, 
    parser: CliValParserType<T> = (x: T): T => x as T
): Promise<T | null>
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