import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './Routes/App/App';
import registerServiceWorker from './Services/service_workers/registerServiceWorker';
// import './Styles/_global.css';
// import './Styles/_core.scss';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
