
$(document).ready(function(){
    console.log("Jquery ready")
    var title=$("title").val()
    var title1 = $(this).attr('title');
    console.log(title,"and",title1);
});

if($("#commentbox"))
{
    console.log("session still exists")
}
else
    console.log("session ended")
var submitbutton=$("#submit")
if(submitbutton)
{
    submitbutton.click(function()
    {
        console.log("submit button clicked")
        var commenttext=$("#commentbox").val()
        if(len(commenttext)===0)
        alert("Please enter some text before submitting your comment")
        else//we need to update the comment in the database through a post request and reload the comments
        {
            $.ajax({
                url:"http://chsreenivas92.imad.hasura-app.io/updatecomments",
                type:'post',
                contentType:'application/json',
                data:JSON.stringify(inputparameters),
                
        })
        }
        
    });
}
