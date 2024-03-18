import * as rwsInkComponents from './components/index';
import * as rwsInkHelpers from './helpers/index';

import { ReactNode } from 'react';

import * as ink from 'ink';

const render: (node: ReactNode, options?: NodeJS.WriteStream | ink.RenderOptions) => ink.Instance = ink.render;

export {
    rwsInkHelpers,
    rwsInkComponents,
    ink,
    render 
};