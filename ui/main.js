
console.log('Loaded!');

var monsterimage=document.getElementById("monsterimage");
var leftmargin=0;
 function anim(){
     
     console.log("anim");
     leftmargin=leftmargin+10;
     monsterimage.style.marginLeft=leftmargin+'px';
     console.log(monsterimage.style.marginLeft);
     if(leftmargin>='1250')
     {
         leftmargin=-leftmargin;
       // myi.style.marginLeft=leftmargin+'px'; 
     }
 }

monsterimage.onclick= function(){
   var interval=setInterval(anim,50);
   console.log(interval);
};

var submit=document.getElementById("submit");
var request=new XMLHttpRequest();

submit.onclick=function() {
    
    
    var user=document.getElementById("user").value;
    console.log("submitted username :"+user);
    //var templist=[];
    request.onreadystatechange = function (){
    if(request.readyState===XMLHttpRequest.DONE)
    {
     if(request.status === 200)
        {
            
            var rs= JSON.parse(request.responseText); 
            console.log("got response list "+rs);
            var userlist = document.getElementById("userlist");
            var responselist="";
            for (i=0;i<rs.length;i++)
            {
                responselist+="<li>"+rs[i]+"</li>";
            }
            userlist.innerHTML = responselist;
        }
    }
};
request.open('GET','http://chsreenivas92.imad.hasura-app.io/submit-name?name='+user,true);
request.send();
};
var login=$("#Login");
//var register=;

$("#Register").click(function(){
    console.log("clicked register button")
    var username=$("#username").val();
    var password=$("#password").val();
    console.log("username and password are "+username+","+password);
    var jsonobject={"user1":username,"pass1":password};
     request.onreadystatechange = function (){
    if(request.readyState===XMLHttpRequest.DONE)
    {
     
            console.log("got response"+request.responseText);
        
    }
     }
    request.open('POST','http://chsreenivas92.imad.hasura-app.io/register',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(jsonobject);
});





