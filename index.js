import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import routes from './routes';
import './index.css';
import App from './App';


const store = createStore(
  (state ={}) => state,
  applyMiddleware(thunk)
);

ReactDOM.render(
        <Provider store={store}> 
          <Router history={browserHistory} routes={routes} >
          <App />
          </Router>,
        
        </Provider>,
    
  document.getElementById('root')
);

export default browserHistory
