import { jsx as _jsx } from "react/jsx-runtime";
import { render } from 'ink';
import { Select } from '@inkjs/ui';
export default async function select(choices, defaultVal, parser = null) {
    return new Promise((resolve) => {
        render(_jsx(Select, { defaultValue: defaultVal, options: choices, onChange: (newVal) => {
                resolve(newVal);
            } }));
    });
}
//# sourceMappingURL=cli.js.map