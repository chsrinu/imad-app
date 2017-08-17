
console.log('Loaded!');

var myi=document.getElementById("b");
 function anim(){
     
     
     myi.style.marginLeft+=100+'px';
     console.log(myi.style.marginLeft);
 }
 
 
 
myi.onClick= function(){
   setInterval(anim,100);
};



