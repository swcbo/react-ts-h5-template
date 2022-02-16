import '@/assets/css/common.less';
import 'lib-flexible';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { GlobalProvider } from 'rmox';
import App from './App';
import { setWindowHeight } from './utils';
setWindowHeight();
window.onresize = () => {
  setWindowHeight();
};
render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>,
  document.getElementById('root'),
);
