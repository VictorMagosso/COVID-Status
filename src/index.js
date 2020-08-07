import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Nacional from './Pages/Nacional';
import Global from './Pages/Global';
import Relatorio from './Pages/Relatorio';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/relatorio" component={Relatorio}/>
      <Route path="/nacional" component={Nacional}/>
      <Route path="/global" component={Global}/>
    <App />
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
