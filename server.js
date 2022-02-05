// AJAX allows for posting and receiving new data 
// CRUD Create.Get.Update.Delete = requests



// require express 
// gives us a function 
const express = require('express');
const bodyParser = require('body-parser');

// create an instance of express by calling the function returned above
// gives us an object
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded( {
  extended: true,
}));

// express static file serving
// folder name is server/public
app.use(express.static('server/public'));



// start up our server
app.listen(port, function() {
    console.log('listening on port', port);
});

