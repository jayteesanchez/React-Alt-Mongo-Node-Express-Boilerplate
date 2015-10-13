import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

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
