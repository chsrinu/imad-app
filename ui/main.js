
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
var request=new XMLHttpRequest();

clicker.onclick=function() {
alert("u are trapped");
request.onreadystatechange = function (){
    if( request.status == 200)
        {
            var clickcount=document.getElementById("clickcount");
            alert("req made succ");
            var temp=request.resposeText;
            Console.log("getting the response");
            clickcount.innerHTML=temp.toString();
        }
};
};

request.open('GET','http://chsreenivas92.imad.hasura-app.io/counter',true);
request.send(null);
