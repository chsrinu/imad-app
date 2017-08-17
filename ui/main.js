
console.log('Loaded!');

var myi=document.getElementById("b");
 function anim(){
     
     console.log("anim");
     myi.style.marginLeft+=100+'px';
     console.log(myi.style.marginLeft);
 }
 
 
 
myi.onclick= function(){
   var interval=setInterval(anim,100);
   console.log(interval);
};



