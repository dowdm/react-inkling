import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.gif';

function Header(){
  return(
    <div>
      <style jsx>{`
        .header-wrapper img {
          display: block;
          margin: auto;
          height: 150px;
        }

        .header-wrapper {
          text-align: center;
        }
      `}</style>
      <div className="header-wrapper">
        <img src={logo} />
        <h1>Inkling</h1>
        <Link to="/">Home</Link> | <Link to="/newpost">Create Post</Link>
      </div>
    </div>
  );
}

export default Header;
