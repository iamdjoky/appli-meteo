import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import store from "./store/store";
import './index.css';
import App from './App';
import Position from './components/LocalisationBis'
import Favoris from './views/Favoris';
import Recherche from './views/Recherche';
import { Provider } from 'react-redux';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>  
  <Provider store={store}>
  <Routes>
      <Route path="/" element={<App />}>
      <Route path="/accueil" element={<Position/>}/>
      <Route path='/favoris' element={<Favoris />}/>
      <Route path='/recherche'element={<Recherche/>}/>
      </Route>
    </Routes>
    </Provider>
  </BrowserRouter>,
  rootElement
);


