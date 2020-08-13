import React from 'react';
import './App.css';
import Header from './Header'
import {BrowserRouter as Router, Switch, Route, Link }
from "react-router-dom"


function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      <Router>
        <Switch>
          <Route>
            
          </Route>
        </Switch>
      </Router>
      {/* <Router>
        <Switch>
          <Header />
        </Switch>
      </Router> */}
      {/* Tinder Cards */}
        {/* Buttons below tinder cards */}

        {/* Chat screen */}
        {/* Individual chat screen */}
        {/* Account screen */}
    </div>
  );
}

export default App;
