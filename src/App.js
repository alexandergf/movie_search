import React, { Component } from 'react';
import './App.css';
import ListLinkRequest from './components/ListLinkRequest';
import Details from './components/Details';
import { BrowserRouter as Router, Route } 
   from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route path="/" exact
                component={ListLinkRequest} />
        <Route path="/details"
              component={Details} />
      </div>
      </Router>
    );
  }
}

export default App;
