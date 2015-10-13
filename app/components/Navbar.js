import React from 'react';
import {Link} from 'react-router';

class Navbar extends React.Component {
  render() {
    return (
       <nav className="navbar fadeIn animated">
          <div className="container-fluid">
            <div>
              <span className='navbar-left' id='home'>
                <Link to='/'>
                  HOME&nbsp;
                </Link>
              </span>
              <span> | </span>
              <span id='resources'>
                <Link to='/resources'>
                  RESOURCES
                </Link>
              </span>
              <span> | </span>
              <span id='website'>
                <a href='http://www.jayteesanchez.com'>
                  ABOUT ME
                </a>
              </span>
            </div>
          </div>
        </nav>
    );
  }
}

Navbar.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Navbar;
