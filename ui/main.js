
console.log('Loaded!');


var marginleft=0;
$(".img-medium").click(function() {
   marginleft+=20;
  //$(".img-medium").animate({left:"+=1000px"},1000);
  
  $(".img-medium").animate({left: "+=1000px"});
 
});
