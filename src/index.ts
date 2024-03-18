import * as rwsInkComponents from './components/index';
import { ReactNode } from 'react';
//@ts-expect-error notypes
import * as ink from 'ink';

const render: (node: ReactNode, options?: NodeJS.WriteStream | ink.RenderOptions) => ink.Instance = ink.render;

export {
    rwsInkComponents,
    ink,
    render 
};