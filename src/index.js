import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import cadastroCanalCafe from './pages/canalCafe/cadastroCanalCafe'
import infoCanalCafe from './pages/canalCafe/infoCanalCafe'

import cadastroPalatus from './pages/palatus/cadastroPalatus'
import infoPalatus from './pages/palatus/infoPalatus'

import cadastroSilvaLanches from './pages/silvaLanches/cadastroSilvaLanches'
import infoSilvaLanches from './pages/silvaLanches/infoSilvaLanches'

import cadastroZCafe from './pages/zCafe/cadastroZCafe'
import infoZCafe from './pages/zCafe/infoZCafe'

import NotFound from './pages/notfound'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter >
    
        <Switch>
            <Route path="/" exact={true} component={App} />

            <Route path="/cadastroCanalCafe" component={cadastroCanalCafe} />
            <Route path='/infoCanalCafe' component={infoCanalCafe} />

            <Route path="/cadastroPalatus" component={cadastroPalatus} />
            <Route path='/infoPalatus' component={infoPalatus} />

            <Route path="/cadastroSilvaLanches" component={cadastroSilvaLanches} />
            <Route path='/infoSilvaLanches' component={infoSilvaLanches} />

            <Route path="/cadastroZCafe" component={cadastroZCafe} />
            <Route path='/infoZCafe' component={infoZCafe} />

            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>


    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
