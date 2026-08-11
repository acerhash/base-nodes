import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Guard against wallet extension property redefinition errors (e.g. isZerion)
if (typeof window !== 'undefined') {
  const origDefine = Object.defineProperty;
  Object.defineProperty = function (obj, prop, descriptor) {
    try {
      return origDefine(obj, prop, descriptor);
    } catch (err: any) {
      if (err && (err.message?.includes('Cannot redefine property') || err.message?.includes('isZerion') || String(prop) === 'isZerion')) {
        try {
          (obj as any)[prop] = descriptor ? descriptor.value : undefined;
        } catch (_) {}
        return obj;
      }
      throw err;
    }
  };
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
