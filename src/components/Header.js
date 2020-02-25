import React, { Component } from 'react';
import '../styles/Header.css';
import mainLogo from '../images/Logo.jpg';

class Header extends Component {

  render() {
    return (
      <header className="masthead">
        <div className="inner">
          <img src={mainLogo} alt="Avatar" className="avatar" />
        </div>
      </header>
    );
  }
}

export default Header;