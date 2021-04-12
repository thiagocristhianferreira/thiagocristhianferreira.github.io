import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProviderPages from './Context/ProviderPages';
import Home from './Pages/Home';
import Projetos from './Pages/Projetos';
import Habilidades from './Pages/Habilidades';
import Sobre from './Pages/Sobre';

function App() {
  // test
  return (
    <ProviderPages>
      <Switch>
        <Route path="/projetos" component={ Projetos } />
        <Route path="/habilidades" component={ Habilidades } />
        <Route path="/sobre" component={ Sobre } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </ProviderPages>
  );
}

export default App;
