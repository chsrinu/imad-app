console.log('Loaded!');
var marginleft=0;
$(".img-medium").click(function() {
    console.out("clicked");
    marginleft+=10;
   $(".img-medium").left=$(".img-medium").left+marginleft+'px';
   
    
});