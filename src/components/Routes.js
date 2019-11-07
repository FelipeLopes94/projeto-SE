import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Informacoes from '../pages/informacoes';
import Home from './../components/Home';
import Cadastro from '../pages/cadastro';
import NotFound from '../';

class Routes extends React.Component {
    state = {}
    render() {
        return (

            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/informacoes' component={Informacoes} />
                    <Route path='/cadastro' component={Cadastro} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        );
    }
}

export default Routes;