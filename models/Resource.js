var mongoose = require('mongoose');

var ResourceSchema = new mongoose.Schema({
  name:             String,
  img_url:          String
});


module.exports = mongoose.model('Resource', ResourceSchema);
