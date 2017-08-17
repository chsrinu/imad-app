
console.log('Loaded!');



var main=function(){
    $("#b").click(function() {
   alert("clicked");

$('#b').animate({right:"1000px"},1000);
  
});
};

$(document).ready(main);
