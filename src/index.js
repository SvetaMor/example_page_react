import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './index.css';
import AppContainer from './components/App/AppContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('root'));

serviceWorker.unregister();
