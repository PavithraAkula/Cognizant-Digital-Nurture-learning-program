$(document).ready(function() {
  $('#registerBtn').click(function() {
    $('.event-card').fadeIn(500);
  });


  setTimeout(() => {
    $('#event1').fadeOut(500);
  }, 3000);
});
