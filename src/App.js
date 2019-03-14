import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button } from 'reactstrap';
import TechnicalInterview from './TechnicalInterview';
import Topics from './Topics';
import BecomeMentor from './BecomeMentor';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/listings" component={TechnicalInterview} />
            <Route exact path="/listings/:id" component={Topics} />
            <Route exact path="/add" component={BecomeMentor} />
          </Switch>
         </React.Fragment>
      </Router>
    );
  }
}

export default App;