var Resource = require('../models/Resource');

// GET
function getAll(request, response) {
  Resource.find(function(error, resource) {
    if(error) response.json({message: 'Could not find any resource'});
    response.json({resource: resource});
  });
}

// POST
function createResource(request, response) {
  console.log('in Resource');
  console.log('body:',request.body);

  var resource = new Resource({
  name:       request.body.name,
  img_url:    request.body.img_url
});

  resource.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate resource b/c:' + error});

    response.json({resource: resource});
  });
}

// GET
function getOneResource(request, response) {
  var id = request.params.id;

  Resource.findById({_id: id}, function(error, resource) {
    if(error) response.json({message: 'Could not find resource b/c:' + error});

    response.json({resource: resource});
  });
}

function updateResource(request, response) {
  var id = request.params.id;

  Resource.findById({_id: id}, function(error, resource) {
    if(error) response.json({message: 'Could not find resource b/c:' + error});

    if(request.body.resource_img)            resource_img        = request.body.resource_img;
    if(request.body.resource_name)           resource_name       = request.body.resource_name;


    resource.save(function(error) {
      if(error) response.json({messsage: 'Could not update resource b/c:' + error});

      response.json({message: 'Resource successfully updated', resource: resource});
    });
  });
}

function removeResource(request, response) {
  var id = request.params.id;

  Resource.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete resource b/c:' + error});

    response.json({message: 'Resource successfully deleted'});
  });
}

module.exports = {
  getAll: getAll,
  createResource: createResource,
  getOneResource: getOneResource,
  updateResource: updateResource,
  removeResource: removeResource
}
