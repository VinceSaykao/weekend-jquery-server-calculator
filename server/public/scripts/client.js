$(document).ready(onReady);

function onReady() {
    $('#equal').on('click', equalButtonDo);
    $('#c').on('click', clearButtonDo)
}; // end of function


function equalButtonDo() {
    $('#result').append('<div>',
    ($('#first-input').val())
    ,'</div>');
}; // end of function 

function clearButtonDo() {
    $('#result').empty();


}; // end of function

