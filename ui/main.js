
console.log('Loaded!');

var myi=document.getElementById("b");
var leftmargin=0;
 function anim(){
     
     console.log("anim");
     leftmargin=leftmargin+10;
     myi.style.marginLeft=leftmargin+'px';
     console.log(myi.style.marginLeft);
     if(myi.style.marginLeft>='1200px')
     {
        leftmargin=-1200+'px'; 
     }
 }
 
 
 
myi.onclick= function(){
   var interval=setInterval(anim,100);
   console.log(interval);
};



