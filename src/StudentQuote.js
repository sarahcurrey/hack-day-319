import React, {Component} from 'react';
import './StudentQuote.css';


class StudentQuote extends Component {
  render() {
    return (
         <React.Fragment>
          <div className="profile">
            <div className="about">

              <img className="profpic" src="https://i.imgur.com/XgCDfR8.png" alt="profpic"/>
              <div className="desc">
              <h1 className="boldinfo"> Lyn Muldrow, GA San Francisco Graduate </h1>
              <hr/>
              <p className="brand"> "GA coached me through the techincal and foundational knowledge of interviewing in the software engineering field. From whiteboarding challenges to algorithms, I felt confident and prepared stepping into my first pair programming interview."
              </p>
              </div>
            <div className="stats">
              <p className="boldinfo"> 28 </p>
              <p> Phone Screens </p>
              <p className="boldinfo"> 12 </p>
               <p> Technical Interviews </p>
              <p className="boldinfo"> 4</p>
               <p> Job Offers </p>
          </div>
          </div>                     </div>
       
         </React.Fragment>
      )
  }
}

export default StudentQuote;