
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

var submit=document.getElementById("submit");


submit.onclick=function() {
    var request=new XMLHttpRequest();
    var resposelist=[];
    var username=document.getElementById("username").value;
    console.log("submitted username :"+username);
    //var templist=[];
    request.onreadystatechange = function (){
    if(request.readyState===XMLHttpRequest.DONE)
    {
     if(request.status === 200)
        {
           
            resposelist= JSON.parse(request.responseText); 
            console.log("got response list "+responselist);
            var userlist = document.getElementById("userlist");
            
            userlist.innerHTML = responselist;
        }
    }
};
request.open('GET','http://chsreenivas92.imad.hasura-app.io/submit-name?name='+username,true);
request.send();
};


