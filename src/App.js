import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import Wrapper from "./components/wrapper";
// import CategoryList from "./components/search";
import './App.css';
import "bulma/css/bulma.css";
import {Button, MenuList} from "bloomer";
import Ingredient from './components/ingredient';



function App() {
  return (
      <div className="App">
          <header className="App-header">
              <h1>Recipe Junkie</h1>
          </header>
          <Wrapper>
              <MenuList>
                  <Ingredient/>
              </MenuList>
        </Wrapper>
      </div>
  );
}

export default App;
