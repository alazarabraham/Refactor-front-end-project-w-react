import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import Wrapper from "./components/wrapper";
// import CategoryList from "./components/search";
import './App.css';
import "bulma/css/bulma.css";
import {Button, MenuList} from "bloomer";
import Stories from './components/stories';
import './App.css';



function App() {
  return (
      <div className="App">
          <header className="App-header">
              <h1>Crazy News From the Justice Department</h1>
              <img src="https://d2v9ipibika81v.cloudfront.net/uploads/sites/253/Logo-Department-of-Justice-1.jpg"></img>
          </header>
          <Wrapper>
              <MenuList>
                  <Stories/>
              </MenuList>
        </Wrapper>
      </div>
  );
}

export default App;
