
$(document).ready(function(){
    console.log("Jquery ready")
    console.log(document.title,"is title")
   
});

if($("#commentbox"))
{
    console.log("session still exists")
}
else
    console.log("session ended")
var submitbutton=$("#submitComment")
if(submitbutton)
{
    submitbutton.click(function()
    {
        console.log("submit button clicked")
        var commentText=$("#commentbox").val()
        var urlpath=location.pathname;
        console.log("pathname of url is "+url.path.substr(urlpath.lastIndexOf('/')+1));
        inputparameters={"articleTitle":document.title,"commentText":commentText}
        if(commentText.length === 0)
            alert("Please enter some text before submitting your comment");
        else//we need to update the comment in the database through a post request and reload the comments
        {
            console.log("comment text is "+commentText)
            $.ajax({
                url:"http://chsreenivas92.imad.hasura-app.io/uploadcomment",
                type: 'post',
                contentType:'application/json',
                data:JSON.stringify(inputparameters),
                success : function(data){//reload the comments
                    console.log("Post request successful so updating the same data in html"+data)
                    var rs=JSON.parse(data)
                    console.log(rs)
                    var commentlist=""
                    for(i=0;i<rs.length;i++)
                    {
                        console.log(rs[i].comments);
                        commentlist+="<li>"+rs[i].comments+"</li>"
                    }
                    console.log(commentlist);
                    //document.getElementById("commentbox").innerHTML=" "
                    $("#commentbox").val('');
                    $("#commentsList").html(commentlist);
                },
                error   : function(data){//show the error
                     //console.log(data.toString())
                     console.log('%j', JSON.parse(data));
                }
                
            })
        }
        
    });
}
