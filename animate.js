

$(".cuckoo_bird").click(function(){
  $(".cuckoo_bird").animate(
      {"right": "-=1150px"},
      {duration:  4400,
      complete: function()
      {
  $(".cuckoo_bird").fadeOut();

  }});
} );
var sound;
$(".cuckoo_bird").click(function(){
  sound=new Audio("cuckoo.mp3");
  sound.play();
});
$(".cuckoo_bird").click(function(){
$(".tit").slideUp(1000);
});


$(".parrot_bird").click(function(){
  $(".parrot_bird").animate(
      {"right": "-=1150px"},
      {duration:  4400,
      complete: function()
      {
  $(".parrot_bird").fadeOut();

  }});
} );
var sound;
$(".parrot_bird").click(function(){
  sound=new Audio("parrot.wav");
  sound.play();
});
$(".parrot_bird").click(function(){
$(".ptext").slideUp(1000);
});
