// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {
    $('#new_tweet').on('submit', function(event){
      event.preventDefault();

    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: $(this).serialize(),
      dataType: 'html'

    }).done(function(responseData){
      console.log('Submission success');
      var tweet = $('<li>').html(responseData).attr('class', 'tweet');
      $('.tweets').prepend(tweet);
    });

});


});
