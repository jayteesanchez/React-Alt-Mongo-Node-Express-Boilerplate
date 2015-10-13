import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
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
