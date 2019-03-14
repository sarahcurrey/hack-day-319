import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './Form.css';


class Form extends Component {
  state = {
    cityLocation: '',
    fireRedirect: false,
  };

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value)
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    axios
      .get('/listings', {
        cityLocation: this.state.city_location
      })
      .then(res => {
        console.log(res);
        this.setState({
          newId: res.data.data.id,
          fireRedirect: true,
        })
      })
      .catch(err => console.log(err));
      e.target.reset();
  }



  render () {
    return(
       <div className="full-form">
        <h2 className="book"> Ace the Interview, Land Your Dream Job.  </h2>
         <h5 className="find"> Practice coding and whiteboard challenges with our experts. Find an expert near you:</h5>
        <form className="home-form" onSubmit={(e) => this.handleFormSubmit(e)}>
          <section className="where">
              <label>
                Location
              </label>
                 <br/>
                  <input
                      type= "text"
                      placeholder= "New York, NY, United States"
                      name="where"
                      value={this.state.city_location}
                      onChange={(e) => this.handleInputChange(e)}
                  />
           </section>
              <section className="first-name">
              <label>
                  First Name
              </label>
                  <br/>
                    <input
                      type= "text"
                      placeholder= "Katherine"
                      
                  />
              </section>
              <section className="last-name">
              <label>
                Last Name
              </label>
                <br/>
                  <input
                      type= "text"
                      placeholder= "Jonson "
                      
                  />
              </section>
          <section className="email">
          <label>
            Email Address
          </label>
             <br/>
              <input
                  type= "text"
                  placeholder= "Your email address"
                  name="guest"
              />
          </section>
          <section className="search">
          <input className="search-button" type="submit" value="Request More Info" />
          </section>
        </form>
         {this.state.fireRedirect
          ? <Redirect push to={`/listings/`} />
          : ''}
        </div>
      )
  }
}

export default Form;