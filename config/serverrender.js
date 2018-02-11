import React from 'react';
import { renderToString } from 'react-dom/server';
import { Static2 } from '../src/demo/static';
export function render() {
    return renderToString(<div><Static2 /></div>)
};