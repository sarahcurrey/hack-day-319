import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BelowTheFold.css';


class BelowTheFold extends Component{
  render(){
    return(
        <div className="second">
          <h2 className="ga-header"> Developed With Industry Leaders to Keep You Competitive </h2>
          <h3 className="ga-subtitle">We’ve partnered with global authorities like L’Oréal, Google, IBM, Medium, Universal McCann, Bonobos, Priceline, and more to pinpoint today’s most crucial digital skills. </h3>
          <div className='ga-row'>
            <div className="ga-col ga-col-md-10 ga-col-lg-8 ga-col-md-centered">
              <img className="six-concepts" src="https://i.imgur.com/Pl96dQP.png"/>
            </div>
          </div>

          <footer>
            <img className="footer" src="https://i.imgur.com/uOZGDxV.png"/>
           </footer>
        </div>
      )
  }
}

export default BelowTheFold;