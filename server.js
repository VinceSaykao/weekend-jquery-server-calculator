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

function calculationMotherShip(calcData){ //doing math...
  if(calcData.operator === '+'){ //if operator is plusButton, we add
      calcData.product = parseInt(calcData.firstNumber) + parseInt(calcData.secondNumber);
  }
  else if(calcData.operator === '-'){ //if operator is minus, we subtract
      calcData.product = parseInt(calcData.firstNumber) - parseInt(calcData.secondNumber);
  }
  else if(calcData.operator === 'x'){ //if operator is multiply, we multiply
      calcData.product = parseInt(calcData.firstNumber) * parseInt(calcData.secondNumber);
  }
  else if(calcData.operator === '/'){ //if operator is divide, we divide 
      calcData.product = parseInt(calcData.firstNumber) / parseInt(calcData.secondNumber);
  };
}; // end of calcData

app.get('/calc', (req, res) => {
  console.log('We have received reinforcement your majesty!');
  // const equationToAdd = req.body;
  // calculationsArray.push(equationToAdd);
  // console.log(equationToAdd);
  res.send(calculationsArray); //send the array to the client to do stuff with it (in thi case - see getTheMaths - function(response))
});





// start up our server
app.listen(port, function() {
    console.log('listening on port', port);
});



