import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.gif';

function Header(){
  return(
    <div>
      <style jsx>{`
        .header-wrapper {
          text-align: center;
        }

        .header-wrapper img {
          display: block;
          margin: auto;
          height: 150px;
        }

        .header-wrapper h1 {
          font-family: monospace;
          font-size: 3rem;
        }
      `}</style>
      <div className="header-wrapper">
        <img src={logo} />
        <h1>INKLING</h1>
        <Link to="/">Home</Link> | <Link to="/newpost">Create Post</Link>
      </div>
    </div>
  );
}

export default Header;
