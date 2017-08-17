
console.log('Loaded!');

var myi=document.getElementById("id");
 function anim(){
     
     
     myi.style.marginLeft+=10+'px';
     console.log(myi.style.marginLeft);
 }
 
 
 
myi.onclick= function(){
   setInterval(anim,100);
}



