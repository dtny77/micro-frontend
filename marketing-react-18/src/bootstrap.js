import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';

import App from './App'

const mount = (el) => {
    const root = createRoot(el); // createRoot(container!) if you use TypeScript
    root.render(<App />);
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')
    if (devRoot) {
        mount(devRoot);
    }
}


export { mount }
