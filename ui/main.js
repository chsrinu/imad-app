
console.log('Loaded!');



var main=function(){
    $("#b").click(function() {
   alert("clicked");

$('#b').animate({right:"5000px"},1000);
  
});
};

$(document).ready(main);
