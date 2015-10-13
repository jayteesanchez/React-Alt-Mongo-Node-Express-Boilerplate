import alt from '../alt';
import ResourcesActions from '../actions/ResourcesActions';

class ResourcesStore {
  constructor() {
    this.bindActions(ResourcesActions);
  }

  onAddResourceSuccess(successMessage) {
    this.name = '';
    this.img_url = '';
    this.resourceValidationState = 'Success!';
  }

  onAddResourceFail(errorMessage) {
    this.resourceValidationState = 'has-error';
  }

  onGetResourcesSuccess(data) {
    this.resources = data;
  }

  onGetResourcesFail(errorMessage) {
    this.resourceValidationState = 'Error getting Resources';
  }
}

export default alt.createStore(ResourcesStore);
