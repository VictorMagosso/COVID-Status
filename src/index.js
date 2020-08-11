import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Nacional from './Pages/Nacional';
import Home from './Pages/Home'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/nacional" component={Nacional}/>
      <Route path="/home" component={Home}/>
    <App />
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
