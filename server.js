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

// setting array to empty, will be filled with calc results
let calculationsArray = [];

app.delete('/calc', (req,res) => {
  console.log('clearHistory successfully clicked');
  calculationsArray.length = 0;
  res.send('app.delete server working');
}); 

app.post('/calc', (req,res) => {
  const calcData = req.body;
  calculationMotherShip(calcData);
  calculationsArray.push(calcData);
  res.send('We received it!');

})

// this is the mothership function that will calculate inputs and operators
function calculationMotherShip(calcData){ 
  if(calcData.operator === '+'){ 
      calcData.product = parseInt(calcData.firstNumber) + parseInt(calcData.secondNumber);
  }
  else if(calcData.operator === '-'){ 
      calcData.product = parseInt(calcData.firstNumber) - parseInt(calcData.secondNumber);
  }
  else if(calcData.operator === 'x'){ 
      calcData.product = parseInt(calcData.firstNumber) * parseInt(calcData.secondNumber);
  }
  else if(calcData.operator === '/'){ 
      calcData.product = parseInt(calcData.firstNumber) / parseInt(calcData.secondNumber);
  };
}; // end of calcData

app.get('/calc', (req, res) => {
  console.log('We have received reinforcement your majesty!');

  res.send(calculationsArray); 
});


// start up our server
app.listen(port, function() {
    console.log('listening on port', port);
});



