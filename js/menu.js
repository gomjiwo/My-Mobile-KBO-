$(document).ready(function(){
$("#sidebar").css({"right":"-60%"});
$(".close").hide();

$(".trigger").click(function(){
  $("#sidebar").stop(true,true).animate({"right":"0%"});
  $(".close").show();
});

$(".close").click(function(){
  $("#sidebar").stop(true,true).animate({"right":"-60%"});
});


});