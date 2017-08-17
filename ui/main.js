
console.log('Loaded!');


var marginleft=0;
$(".img-medium").click(function() {
   marginleft+=20;
  $(".img-medium").animation({left:'100px'},100)
});
