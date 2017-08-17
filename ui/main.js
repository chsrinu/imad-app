console.log('Loaded!');
var marginleft=0;
$(".img-medium").click(function() {
   marginleft+=10;
  var outp= "clicked " +marginleft+" times";
   $('#counter').html(outp);
});
