
function nextQuestion() {
    console.log('vanishing');
    $('#first-step').addClass('vanished');
    setTimeout(function() { return showNextQuestion() }, 1000);
}

function showNextQuestion() {
    $('#first-step').css('display', 'none');
    $('#second-step').css('opacity', 0);
    $('#second-step').css('display', 'flex');
    $('#second-step').fadeTo('slow', 1, function() {
        $('#second-step').css('transform', 'translate(0px)');
    });
}