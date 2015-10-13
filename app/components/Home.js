import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
        <div className='container'>
          <h1 className='text-center'>
            Home view
          </h1>
          <h5 className='text-center'>
            <p>This is the Landing Page!</p>
            <p>Click the Resources Link to See interactions with the API!</p>
            <p>Don't forget to run the seed file to see something!</p>
            <p>
              Github Repo &nbsp;
              <a href='https://github.com/jayteesanchez/React-Alt-Mongo-Node-Express-Boilerplate'>
                Click Here
              </a>
            </p>
          </h5>
        </div>
    )
  }
}

export default Home;
