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
    ResourcesActions.getResources();
  }

  componentWillUnmount() {
    ResourcesStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
    var n = this.state.name.trim();
    var i = this.state.img_url;
    AddResourceActions.addResource(n, i);
  }


  render() {
    var allResources = this.state.resources.map((resource) => {
        return (
            <div key={resource._id} className='panel panel-default'>
              <div className='panel-heading'>{resource.name}</div>
              <div className='panel-body'>
                <img src={resource.img_url}/>
              </div>
            </div>
          );
          }
        );
    return (
      <div className='container'>

        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add a Resource</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className={'form-group ' + this.state.resourceValidationState}>
                    <label className='control-label'>Caption</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.name} />
                  </div>
                  <div className='form-group'>
                    <label className='control-label'>Image URL</label>
                    <input type='text' className='form-control' ref='img_urlTextField' value={this.state.img_url} />
                  </div>
                  <button type='submit' className='btn btn-success flipInX animated'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2'>
            {allResources}
          </div>
        </div>

    </div>
    );
  }
}


export default Resources;
