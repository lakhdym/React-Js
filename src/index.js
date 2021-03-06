import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
const App = () => {
  return (
    <div className="container">
      
      <BrowserRouter>
        <Router />
      </BrowserRouter>

    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
