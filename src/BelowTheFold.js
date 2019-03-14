import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BelowTheFold.css';
import RequestInfo from './RequestInfo';
import StudentQuote from './StudentQuote';
import LearningPaths from './LearningPaths';
import Data from './Data';

class BelowTheFold extends Component{
  render(){

    return(
        <div className="second">
          <div>
              <h5 className="partners"> Ace Your Interview with Our Partners From Around the World </h5>
              <img className='gif' src="https://i.imgur.com/1baGEHw.gif"/>
          </div>
          <h2 className="ga-header"> Developed With Industry Leaders to Keep You Competitive </h2>
          <h3 className="ga-subtitle">We’ve partnered with global authorities like L’Oréal, Google, IBM, Medium, Universal McCann, Bonobos, Priceline, and more to pinpoint today’s most crucial digital skills. </h3>
          <div className='ga-row'>
            <div className="ga-col ga-col-md-10 ga-col-lg-8 ga-col-md-centered">
              <img className="six-concepts" src="https://i.imgur.com/Pl96dQP.png"/>
            </div>
          </div>
          <div className="ga-block ga-block-secondary ga-p-around-md">
            <div className="flex">
              <h2 className="ace"> Ace the Interview and Land your Dream Job </h2>
              <h4 className="start-now"> Start strengthing your technical interview skills. </h4>
            </div>
            <RequestInfo/>
          </div>
          <Data/>
          <StudentQuote/>
          <h2 className="learning-paths"> Convenient Learning Paths</h2>
          <LearningPaths/>
          <footer>
            <img className="footer" src="https://i.imgur.com/X5KCWA9.png"/>
           </footer>
        </div>
      )
  }
}

export default BelowTheFold;

