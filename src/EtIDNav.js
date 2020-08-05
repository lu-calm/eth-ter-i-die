import React from 'react';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home.js";
import TextFiles from "./textfiles.js";
import About from "./about.js";
import "./App.css";




const EtIDNav = () => (
<>

<HashRouter>
        <div>
          <h1>Eth-ter-I-Die</h1>
            <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/textfiles">The Files</NavLink></li>

          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/textfiles" component={TextFiles}/>

          </div>
        </div>
      </HashRouter>

</>

);


export default EtIDNav;
