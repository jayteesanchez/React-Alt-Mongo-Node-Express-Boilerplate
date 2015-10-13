import alt from '../alt';

class ResourcesActions {
  constructor() {
    this.generateActions(
      'addResourceSuccess',
      'addResourceFail',
      'getResourcesSuccess',
      'getResourcesFail'
    );
  }

  getResources() {
    $.ajax({ url: '/api/resources' })
      .done((data) => {
        this.actions.getResourcesSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getResourcesFail(jqXhr.responseJSON.message);
      });
  }

  addResource(n, i) {
    $.ajax({
      type: 'POST',
      url: '/api/resources/',
      data: {
        name:    n,
        img_url: i
      }
    })
      .done((data) => {
        this.actions.addResourceSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addResourceFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(ResourcesActions);
