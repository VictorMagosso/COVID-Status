import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Nacional from './Pages/Nacional';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/nacional" component={Nacional}/>
    <App />
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
