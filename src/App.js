import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import './App.css';

import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Nosotros from './components/nosotros/Nosotros';
import {Aprendamos} from './components/aprendamos/Aprendamos'
import {Aprendamos2} from './components/aprendamos/Aprendamos2'

function App() {
  return (
    <>
    <div className="">
      <Menu/>
      </div>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/nosotros" exact component={Nosotros} />
      <Route path="/aprendamos" exact component={Aprendamos} />
      <Route path="/aprendamos/empieza-a-aprender" exact component={Aprendamos2} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
