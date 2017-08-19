
console.log('Loaded!');

var myi=document.getElementById("b");
var leftmargin=0;
 function anim(){
     
     console.log("anim");
     leftmargin=leftmargin+10;
     myi.style.marginLeft=leftmargin+'px';
     console.log(myi.style.marginLeft);
     if(leftmargin>='1250')
     {
         leftmargin=-leftmargin;
       // myi.style.marginLeft=leftmargin+'px'; 
     }
 }

myi.onclick= function(){
   var interval=setInterval(anim,50);
   console.log(interval);
};

var clicker=document.getElementById("abc");


clicker.onclick=function() {
    var request=new XMLHttpRequest();
request.onreadystatechange = function (){
    if(request.readyState===XMLHttpRequest.DONE)
    {
     if(request.status === 200)
        {
           
            var temp=request.resposeText
            var clickcount=document.getElementById("clickcount");
            
            console.log("getting the response ");
            clickcount.innerHTML=temp.toString();
        }
    }
};
request.open('GET','http://chsreenivas92.imad.hasura-app.io/counter',true);
request.send();
};


