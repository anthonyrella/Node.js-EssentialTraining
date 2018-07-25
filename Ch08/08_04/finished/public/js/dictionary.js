$(document).ready(function () {
    //contains get and post
    $.getJSON('/dictionary-api', printTerms);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/dictionary-api', {term: $('#term').val(), defined: $('#defined').val()}, printTerms);
        this.reset();
    });

});
//contains displaying the info in form, as well as a delete event for each term
function printTerms(terms) {
    $('body>dl').empty();
    $.each(terms, function () {
        $('<dt>').text(this.term).appendTo('body>dl');
        $('<dd>').text(this.defined).appendTo('body>dl');
    });
    $('dt').off('dblclick').dblclick(function() {
        $.ajax({
            url: '/dictionary-api/' + $(this).text(),
            type: 'DELETE',
            success: printTerms
        });
    });
}
