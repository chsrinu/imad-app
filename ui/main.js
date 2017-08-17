
console.log('Loaded!');

var myi=document.getElementById("b");
var leftmargin=0;
 function anim(){
     if($('b').is(':offscreen'))
     {
     myi.style.marginLeft=0+'px';
     console.log(myi.style.marginLeft);
     }
     else
     {
      console.log("anim");
     leftmargin=leftmargin+10;
     myi.style.marginLeft=leftmargin+'px';
     console.log(myi.style.marginLeft);
     }
     
 }
 
 
 
myi.onclick= function(){
   var interval=setInterval(anim,100);
   console.log(interval);
};



