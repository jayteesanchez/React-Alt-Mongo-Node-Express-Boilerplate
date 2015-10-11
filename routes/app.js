var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var resourcesController = require('../controllers/resources');


router.route('/resources')

  // all resources
  .get(resourcesController.getAll)

  // a new Resource
  .post(resourcesController.createResource);


router.route('/resources/:id')

  // return specific Resource
  .get(resourcesController.getOneResource)

  // update existing Resource
  .put(resourcesController.updateResource)

  // remove specific Resource from DB
  .delete(resourcesController.removeResource);



module.exports = router

