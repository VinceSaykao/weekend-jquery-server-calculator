$(document).ready(onReady);

function onReady() {
    $('#plus').on('click', plusButtonDo);
    $('#minus').on('click', minusButtonDo);
    $('#times').on('click', timesButtonDo);
    $('#divide').on('click', divideButtonDo);
    $('#equal').on('click', equalButtonDo);
    $('.allButtonsInputs').on('click', '#clearHistoryButton', clearHistory);
    $('#c').on('click', clearButtonDo);
  
}; // end of function

// will be re-assigned based on operator click
let operator;

function equalButtonDo() {
    const calcToSend = {
        firstNumber: $('#firstNumber').val(),
        operator: operator,
        secondNumber: $('#secondNumber').val(),
    }; // end of object

    if (calcToSend.firstInput == '' && calcToSend.secondInput == '') {
        alert(`This ain't gonna work buddy! 🤪`);
        return;
    } else if (calcToSend.firstNumber == '' || calcToSend.secondNumber == '') {
        alert(`You've only got one number...`);
    } else if (operator == undefined) {
        alert(`Ope! You forgot to press an operator 👀`);
        return;
    }
    console.log(calcToSend);

$.ajax({
    method: 'POST',
    url: '/calc',
    data: calcToSend
}).then(processPost).catch(processPostError);

}; // end of function

function displayCalcHistory() {
    $('#history').empty();
    if (0 < equationsArray.length) {
        $('#result').text(`
        ${equationsArray[equationsArray.length - 1].firstNumber}
        ${equationsArray[equationsArray.length - 1].operator}
        ${equationsArray[equationsArray.length - 1].secondNumber}
        =
        ${equationsArray[equationsArray.length - 1].product}
        `)
    } else {
        ($('#result')).empty(); 
    }
    if (1 < equationsArray.length) {
        for (i=0;i<equationsArray.length - 1; i++) {
            $('#history').prepend(`<li>${equationsArray[i].firstNumber}  ${equationsArray[i].operator}  ${equationsArray[i].secondNumber}  =  ${equationsArray[i].product}</li>`);
        }
    }

    if (equationsArray.length > 1) {
        if ($('#clearHistoryButton').length == 0) {
            $('.allButtonsInputs').append(`<button id="clearHistoryButton">Clear All</button>`);
        }
    }
}; // end of function

function clearHistory() {
    console.log('deleting history 🤪');
    $.ajax({
        method: 'DELETE',
        url: '/calc',
    }).then(clearFromDom);
    
}; // end of function

function clearFromDom() {
    $('#clearHistoryButton').remove();
    equationsArray = [];
    updateGreeting();
    displayCalcHistory();
}; // end of function

function getCalculations() {
    $.ajax({ 
        method: 'GET',
        url: '/calc',
    }).then(function(response) {
        equationsArray = response;
        updateGreeting();
        displayCalcHistory();
    })
}; // end of function

let equationsArray = [];
function updateGreeting() {
    if (1 == equationsArray.length) {
        $('#chanting').text('You lookin\' smarty-pants! 🥸👖');
    } else if (equationsArray.length >= 2) {
        $('#chanting').text('Result History is: ');
    } else if (0 === equationsArray.length) {
        $('#chanting').text('I\'m ready to rock n roll some Numbahs! 🎸');
    }

}; // end of function



function clearButtonDo() {
    if (
        operator === '+' ||
        operator === '-' ||
        operator === 'x' ||
        operator === '÷' 
        
       ) {
           console.log(`Operator was: ${operator}`);
           operator = operator[-1];
           console.log(`Operator changed to: ${operator}`);
           $('#firstNumber').val('');
           $('#secondNumber').val('');
           $('button').css('background-color', 'black')
           
       } else {
           console.log(`Operator changed to: ${operator}`);
            $('#firstNumber').val('');
            $('#secondNumber').val('');
            $('#result').text('');
            $('button').css('background-color', 'black')
       }
} // end of function



function processPost(res) {
    console.log('the response is: res', res);
    displayCalcHistory();
    clearButtonDo();
    getCalculations();
}; // end of function

function processPostError() {
    alert('It sucks...');
}; // end of function

function plusButtonDo() {
    console.log($(this));
    operator = '+';
    console.log('operator changed to:', operator);
    $('#plus').css('background-color', 'blanchedalmond'); // selected
    $('#minus').css('background-color', 'black');
    $('#times').css('background-color', 'black');
    $('#divide').css('background-color', 'black');

    return;
}; // end of function

function minusButtonDo() {
    console.log($(this));
    operator = '-';
    console.log('operator changed to:', operator);
    $('#plus').css('background-color', 'black'); 
    $('#minus').css('background-color', 'blanchedalmond'); // selected
    $('#times').css('background-color', 'black');
    $('#divide').css('background-color', 'black');
   
    return;
}; // end of function

function timesButtonDo() {
    console.log($(this));
    operator = 'x';
    console.log('operator changed to:', operator);
    $('#plus').css('background-color', 'black');
    $('#minus').css('background-color', 'black');
    $('#times').css('background-color', 'blanchedalmond'); // selected
    $('#divide').css('background-color', 'black');
  
    return;
}; // end of function

function divideButtonDo() {
    console.log($(this));
    operator = '/';
    console.log('operator changed to:', operator);
    $('#plus').css('background-color', 'black'); 
    $('#minus').css('background-color', 'black');
    $('#times').css('background-color', 'black');
    $('#divide').css('background-color', 'blanchedalmond'); // selected
    
    return;
}; // end of function








