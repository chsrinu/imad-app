if ($('#commentbox').length > 0) {
  // exists.
  
}
$( document ).ready(function() {
    console.log( "jQuery ready!" );
});
if (document.readyState === 'complete') {
   console.log( "JS ready!" );
}

var commentbox=document.getElementById("commentbox")
if(commentbox)
{
    commentbox.innerHTML="working with HTML"
}
var submit=document.getElementById("submitComment")
submit.onclick = function()
{
    alert("submit button clicked")
}