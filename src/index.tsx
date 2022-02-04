import 'lib-flexible';
import { render } from 'react-dom';
import App from './App';
import '@/assets/css/common.less';
import * as serviceWorker from './serviceWorker';
import { StrictMode } from 'react';
import { GlobalProvider } from 'rmox';

document
  .getElementsByTagName('body')[0]
  .style.setProperty('--height-primary', `${window.innerHeight}px`);
window.addEventListener('resize', () => {
  document
    .getElementsByTagName('body')[0]
    .style.setProperty('--height-primary', `${window.innerHeight}px`);
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
