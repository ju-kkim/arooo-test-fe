import ReactDOM from 'react-dom/client';

import App from './App';
import GlobalStyle from './styles/globalStyle';
import { BrowserRouter } from 'react-router-dom';

import { worker } from 'mocks/worker';
if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
