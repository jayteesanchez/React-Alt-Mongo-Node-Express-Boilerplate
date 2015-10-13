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
    var n = document.getElementById('nameTextField').value;
    var i = document.getElementById('img_urlTextField').value;

    if (n && i){
      ResourcesActions.addResource(n, i);
      ResourcesActions.getResources();
    }
  }


  render() {
    var imgResize ={
      width: '100%',
      height: '100%'
    }

    var allResources = this.state.resources;
    if (allResources) {
      var resourceDisplay = allResources.resource.reverse().map((resource) => {
        return (
            <div key={resource._id} className='panel panel-default'>
              <div className='panel-heading'>{resource.name}</div>
              <div className='panel-body'>
                <img style={imgResize} src={resource.img_url}/>
              </div>
            </div>
          );
          }
        );
      }
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
                    <input type='text' className='form-control' id='nameTextField' value={this.state.name} />
                  </div>
                  <div className='form-group'>
                    <label className='control-label'>Image URL</label>
                    <input type='text' className='form-control' id='img_urlTextField' value={this.state.img_url} />
                  </div>
                  <button type='submit' className='btn btn-success flipInX animated'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <h3 className='text-center'>All Your Resources!</h3>
          <div className='col-sm-8 col-sm-offset-2'>
            {resourceDisplay}
          </div>
        </div>

    </div>
    );
  }
}


export default Resources;
