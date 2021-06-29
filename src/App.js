import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import DetalhesComidas from './pages/DetalhesComidas';
import DetalhesBebidas from './pages/DetalhesBebidas';
import ProcessoComida from './pages/ProcessoComida';
import ProcessoBebida from './pages/ProcessoBebida';
import Explorar from './pages/Explorar';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExplorarComIngre from './pages/ExplorarComIngre';
import ExplorarBebIngre from './pages/ExplorarBebIngre';
import ExplorarComidasAreas from './pages/ExplorarComidasAreas';
import Perfil from './pages/Perfil';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';

function App() {
  return (
    <div>
      <LoginProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/comidas" component={ Comidas } />
            <Route path="/bebidas" component={ Bebidas } />
            <Route path="/comidas/:id" component={ DetalhesComidas } />
            <Route path="/bebidas/:id" component={ DetalhesBebidas } />
            <Route path="/comidas/:id/in-progress" component={ ProcessoComida } />
            <Route path="/bebidas/:id/in-progress" component={ ProcessoBebida } />
            <Route path="/explorar" component={ Explorar } />
            <Route path="/explorar/comidas" component={ ExplorarComidas } />
            <Route path="/explorar/bebidas" component={ ExplorarBebidas } />
            <Route path="/explorar/comidas/ingredientes" component={ ExplorarComIngre } />
            <Route path="/explorar/bebidas/ingredientes" component={ ExplorarBebIngre } />
            <Route path="/explorar/comidas/area" component={ ExplorarComidasAreas } />
            <Route path="/perfil" component={ Perfil } />
            <Route path="/receitas-feitas" component={ ReceitasFeitas } />
            <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
          </Switch>
        </BrowserRouter>
      </LoginProvider>
    </div>
  );
}

export default App;
