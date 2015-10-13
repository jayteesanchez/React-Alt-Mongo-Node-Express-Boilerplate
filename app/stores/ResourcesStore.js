import alt from '../alt';
import ResourcesActions from '../actions/ResourcesActions';

class ResourcesStore {
  constructor() {
    this.bindActions(ResourcesActions);
  }
}

export default alt.createStore(ResourcesStore);
