import 'lib-flexible';
import '@/assets/css/common.scss';
import { render } from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StrictMode } from 'react';
import { GlobalProvider } from 'rmox';

document
  .getElementsByTagName('body')[0]
  .style.setProperty('--height-primary', `${window.outerHeight}px`);
window.addEventListener('resize', () => {
  document
    .getElementsByTagName('body')[0]
    .style.setProperty('--height-primary', `${window.outerHeight}px`);
});
render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
