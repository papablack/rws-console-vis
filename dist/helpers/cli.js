"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.select = void 0;
const enquirer_1 = require("enquirer");
async function select(keyName, question, choiceVals, defaultVal, parser = (x) => x) {
    const res = await (0, enquirer_1.prompt)([{
            type: 'select',
            name: 'selectValue',
            message: question,
            choices: choiceVals
        }]);
    const picked = choiceVals.find(it => it.name === res.selectValue);
    return picked ? parser(picked.value) : null;
}
exports.select = select;
