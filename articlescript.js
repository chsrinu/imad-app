if ($('#commentbox').length > 0) {
  // exists.
  
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