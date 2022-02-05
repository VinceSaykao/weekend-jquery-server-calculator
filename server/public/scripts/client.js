$(document).ready(onReady);

function onReady() {
    $('#equal').on('click', equalButtonDo);
}; // end of function


function equalButtonDo() {
    $('#result').append('<div>',
    ($('#first-input').val())
    ,'</div>');
}; // end of function 