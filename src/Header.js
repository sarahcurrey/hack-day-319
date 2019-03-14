import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 


function Header() {
  return (
    <header>
      <h3 className="butter-bar"> <a href="https://my.generalassemb.ly/"> New in 2019: Computer Science Content! </a> </h3>
       <nav className="nav-bar">
        <img className="logo" src="https://i.imgur.com/eZ9pF5I.png" title="source: imgur.com" />
      </nav>
    </header>

    )
}

export default Header;


