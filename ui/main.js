
console.log('Loaded!');


var marginleft=0;
$(".img-medium").click(function() {
   marginleft+=20;
  $(".img-medium").animate({left:"200px"},1000);
});
