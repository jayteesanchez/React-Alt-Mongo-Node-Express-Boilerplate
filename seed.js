var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.database);

var Resource = require('./models/Resource');

// callback-style
Resource.remove({}, function(err) {
  if (err) console.log(err);
  console.log("All Resources removed...");
});

var newResources = [
  {
  name: 'Taco Bell',
  img_url: 'http://hackthemenu.com/wp-content/uploads/2013/08/taco-bell-logo.jpg'
  },
  {
  name: 'KFC',
  img_url: 'http://digitaldeconstruction.com/wp-content/uploads/2015/07/KFC.jpg'
  },
  {
  name: 'San Diego',
  img_url: 'http://www.sandiego.com/sites/sandiego.com/files/styles/large/public/content/featured-content/sd-tour-1.jpg?itok=8KDQcQ5u'
  },
  {
  name: 'Las Vegas',
  img_url: 'http://allworldtowns.com/data_images/countries/las-vegas/las-vegas-09.jpg'
  },
  {
  name: 'Blue Shirt',
  img_url: 'http://matchem.com/wp-content/uploads/2015/03/plain-blue-shirt-front-and-back-72hi3bcb.jpg'
  },
  {
  name: 'Black Shirt',
  img_url: 'http://www.clker.com/cliparts/g/o/I/v/g/c/black-shirt.svg'
  },
  {
  name: 'Fly',
  img_url: 'http://s.hswstatic.com/gif/airplanes-work-1.jpg'
  },
  {
  name: 'Drive',
  img_url: 'http://i.telegraph.co.uk/multimedia/archive/02504/car-driving_2504156b.jpg'
  },
  {
  name: 'General Assembly DTLA',
  img_url: 'https://pbs.twimg.com/media/B4Hudn5CUAAwUYj.jpg'
  },
  {
  name: 'General Assembly LA',
  img_url: 'http://s3-media2.fl.yelpcdn.com/bphoto/-CO_FV1u21mCAJ8DmCMQ2Q/258s.jpg'
  },
  {
  name: 'AngularJS',
  img_url: 'http://www.sandiego.com/sites/sandiego.com/files/styles/large/public/content/featured-content/sd-tour-1.jpg?itok=8KDQcQ5u'
  },
  {
  name: 'ReactJS',
  img_url: 'http://allworldtowns.com/data_images/countries/las-vegas/las-vegas-09.jpg'
  },
  {
  name: 'Ruby on Rails',
  img_url: 'https://s3.amazonaws.com/codementor_content/2014-Aug-Week4-interviews/Ruby_on_Rails-logo.png'
  },
  {
  name: 'Express/NodeJS',
  img_url: 'https://node-os.com/images/nodejs.png'
  },
  {
  name: 'Front-End Developer',
  img_url: 'http://www.givingdata.com/wp-content/uploads/2013/07/html-css-js.png'
  },
  {
  name: 'Back-End Developer',
  img_url: 'http://nathanielbuechler.com/imagery/web-rdy_icons/back-end-developer-hex.png'
  }
];

// promise-style
Resource
  .create(newResources)
  .then(
    function(Resources) {
      console.log(Resources.length + " Resources seeded.");
    }, function(err) {
      console.log(err);
  })
  .then(function() {
    mongoose.disconnect();
  });
