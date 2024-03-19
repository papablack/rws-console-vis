"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ink_1 = require("./ink");
const Select = ink_1.inkUi.Select;
async function select(choices, defaultVal, parser = null) {
    return new Promise((resolve) => {
        ink_1.ink.render((0, jsx_runtime_1.jsx)(Select, { defaultValue: defaultVal, options: choices, onChange: (newVal) => {
                resolve(newVal);
            } }));
    });
}
exports.default = select;
