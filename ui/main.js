
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

var button=document.getElementsByTagName("button");
var request=new XMLHttpRequest();
button.onclick= function() {

request.onReadyStateChange = function (){
    if(request.status==200)
        {
            var clickcount=document.getElementById("clickcount");
            Console.log("getting the response");
            clickcount.innerHTML=request.resposeText;
        }
};
});

request.open("GET","http://chsreenivas92.imad.hasura-app.io/counter");
request.send();
