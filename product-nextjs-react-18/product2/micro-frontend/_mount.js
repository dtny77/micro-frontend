import Home from '@/pages';
import React from 'react'
import { createRoot } from 'react-dom/client';


const mount = (el) => {
    const root = createRoot(el); // createRoot(container!) if you use TypeScript
    root.render(<Home />);
}

export { mount }
