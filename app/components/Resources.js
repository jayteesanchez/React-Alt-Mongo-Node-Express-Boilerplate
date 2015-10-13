import React from 'react';
import {Link} from 'react-router';
import ResourcesStore from '../stores/ResourcesStore'
import ResourcesActions from '../actions/ResourcesActions';

class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = ResourcesStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ResourcesStore.listen(this.onChange);
  }

  componentWillUnmount() {
    ResourcesStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
        <div className='container'>
          <h1 className='text-center'>
            Resources view
          </h1>
        </div>
    )
  }
}

export default Resources;
