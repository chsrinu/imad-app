
console.log('Loaded!');



var main=function(){
    $("#b").click(function() {
   alert("clicked");

$("#b").animate({left:'1000px'});
  
});
};

$(document).ready(main);
