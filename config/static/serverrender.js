import React from 'react';
import { renderToString } from 'react-dom/server';

        import Example1 from '../../src/static/example1';

        import Example2 from '../../src/static/example2';

        import Example3 from '../../src/static/example3';


export function render() {
    return [
        
        {
            name: 'Example1',
            content: renderToString(<Example1 />)
        },
        
        {
            name: 'Example2',
            content: renderToString(<Example2 />)
        },
        
        {
            name: 'Example3',
            content: renderToString(<Example3 />)
        },
        
    ];
}