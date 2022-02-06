$(document).ready(onReady);

function onReady() {
    $('#equal').on('click', equalButtonDo);
    $('#c').on('click', clearButtonDo);
    $('#plus').on('click', addInputs);
    $('#minus').on('click', subInputs);
}; // end of function

allCalculation = [
{
    input1: $('#first-input').val(),
    operator: operator,
    input2: $('#second-input').val()
}
]


// } // end of function

function ajaxequalButtonDo() {
    $.ajax({
        type: 'GET',
        url: '/calc'
    }).then (function (response) {
        equalButtonDo();
    })

} // end of function


function songs() {
    $.ajax({
        type: 'GET',
        url: '/song'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let song = response[i];
            $('#songTableBody').append(`
                <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
               
                </tr>
            `);
        }
    });

    // TODO Add ajax request for /songs and display on DOM
}

// when equal button is pressed, will calculate both inputs
function equalButtonDo() {
    ($('#first-input').val(''));
    ($('#second-input').val(''));
    if (sum > 0) {
        $('#result').append('<div>',
         sum
         ,'</div>');
     } else if (sum === null) {
         console.log('found null');
     } else if (sub >= 0) {
        $('#result').append('<div>',
        sub
        ,'</div>');

     } else if (sub === null) {
        return console.log('found null')
    }  else if (tim >= 0) {
        $('#result').append('<div>',
        tim
        ,'</div>');
    } 
  
         
    addInputs();
    subInputs();
   
    
    
}; // end of function 

 // ($('#first-input').val())

// this will clear the results and input fields
function clearButtonDo() {
    $('#result').empty();
    ($('#first-input').val(''));
    ($('#second-input').val(''));
}; // end of function

// this will add both inputs together
function addInputs() {
    sum = null;
    a = Number(($('#first-input').val()));
    b = Number(($('#second-input').val()));
    sum = (a + b);
    console.log(sum);
    
 


}; // end of function

// this will subtract both inputs together
function subInputs() {
    sub = null;
    a = Number(($('#first-input').val()));
    b = Number(($('#second-input').val()))
    sub = (a - b);
    console.log(sub);
    return sub;
}; // end of function

// this will subtract both inputs together
function timesInputs() {
    sub = null;
    a = Number(($('#first-input').val()));
    b = Number(($('#second-input').val()))
    tim = (a * b);
    console.log(tim);
    return tim;
}; // end of function

// this will subtract both inputs together
function dividInputs() {
    sub = null;
    a = Number(($('#first-input').val()));
    b = Number(($('#second-input').val()))
    div = (a / b);
    console.log(div);
    return div;
}; // end of function





