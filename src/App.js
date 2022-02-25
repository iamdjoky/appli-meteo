import logo from './assets/img/logo.png';
import './App.css';
import * as React from "react";
import {Link,Outlet} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img className='img' src={logo} alt="logo"/>
          <h3>Bienvenue sur votre Météo locale !</h3>
        
      </header>
      <footer className="footer">
      <Link to="/accueil">Accueil</Link> | <Link to="/recherche">Rechercher une ville</Link> | <Link to="/favoris">Vos Favoris</Link>
      </footer>
        
      <Outlet/>
    </div>
  );
}

export default App;
