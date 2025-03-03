import { createRoot } from 'react-dom/client';

import { App } from './app.tsx';

import 'reset.css';
import './global.css';

const root = document.createElement('div');
root.id = 'app';

createRoot(root).render(<App />);

document.body.prepend(root);
