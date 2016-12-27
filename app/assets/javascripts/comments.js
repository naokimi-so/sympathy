// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {
  $('.comment').each(function(key,value){
      var rand = Math.floor( Math.random() * 500);
      $(value).css("top",rand);
  });
});
