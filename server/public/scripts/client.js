$(document).ready(onReady);

function onReady() {
    $('#equal').on('click', equalButtonDo);
    $('#c').on('click', clearButtonDo);
    $('#plus').on('click', addInputs)
}; // end of function

// when equal button is pressed, will calculate both inputs
function equalButtonDo() {
    
    $('#result').append('<div>',
    sum
    ,'</div>');
    addInputs();
    
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
    a = Number(($('#first-input').val()));
    b = Number(($('#second-input').val()))
    sum = (a + b);
    console.log(sum);
    return sum;
    

}; // end of function




