import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Form from './Form';
import BelowTheFold from './BelowTheFold';

class Home extends Component {
  render() {
    return(
      <div>
        <div className="home">
          <Header/>
          <Form/>
        </div>
        <BelowTheFold/>
      </div>
      )
  }
}

export default Home;
