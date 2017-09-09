var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var bodyParser = require('body-parser')
var crypto = require('crypto');
var session= require('express-session')
    
    
var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json())
app.use(session({
    secret:"$reen!",
    cookie:{maxAge:1000*60*60*24*30}
}))

const config={
    user:'chsreenivas92',
    database:'chsreenivas92',
    password:'db-chsreenivas92-24567',
    host:'db.imad.hasura-app.io',
    port:'5432'
    };
var counter=0;
var userlist=[];
var pool=new Pool(config)

app.get('/testdb',function(req,res){
    pool.query("select * from article",function(err,results){
        if(err)
            res.status(500).send(err.toString());
        else
            res.send(JSON.stringify(results.rows))
    })
    
});
app.get('/', function (req, res) {
    if(checkSessionExpiry(req))
        res.redirect('/articlelist')
    else
        res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/counter', function(req, res){
    counter++;
    res.send(counter.toString());
});
app.get('/checklogin',function(req,res){
    if(checkSessionExpiry(req))
    {
        res.send("u are already logged in bugger ur id is "+req.session.auth.userId.toString())
    }
    else
        res.send("u did not login yet")
})
app.get('/submit-name', function(req, res){
    userlist.push(req.param("name"));
   res.send(JSON.stringify(userlist));
});
app.get('/ui/main.js', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/articlescript.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articlescript.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
function hash(password){
   var hashed=crypto.pbkdf2Sync(password,'putsomesalt',1000,512,'sha512');
    return hashed.toString('hex');
}
app.post('/register',function(req,res){
    var hashed_username=req.body.user1;
    var hashed_password=hash(req.body.pass1);
    pool.query("insert into users(username,password) values($1,$2)",[hashed_username,hashed_password],function(err,results){
        if(err)
           res.status(500).send(err.toString());
        else
            res.send("successfully created an entry for user "+hashed_username);
    });
   
});

app.post('/login',function(req,res){
    var username=req.body.username;
    var password=hash(req.body.password);
    pool.query("select * from users where username=$1 and password=$2",[username,password],function(err,results){
        if(err)
            res.status(500).send(err.toString());
        else if(results.rows.length === 0)
            res.status(400).send("Invalid credentials");
        else if(results.rows.length === 1)
        {
            req.session.auth={userId:results.rows[0].id} ;
            res.redirect('/articlelist')
        }
        else
            res.send("something went wrong please try later");
    });
});
app.post('/uploadcomment',function(req,res){
   var title=req.body.articlePath;
   var comment=req.body.commentText;
   pool.query("insert into articlecomments(articletitle,comments) values($1,$2)",[title,comment],function(err,results){
       if(err)
        res.status(500).send(err.toString())
       else{
           //res.send("successfully updated the comments returns the comments"+JSON.stringify(results))
       pool.query("select comments from articlecomments where articletitle=$1",[title],function(err,results){
           if(err)
            res.status(500).send(err.toString());
           else
            res.send(JSON.stringify(results.rows));
       });
       }
        
    });
});
app.get('/articlelist',function(req,res){
   pool.query("select title,name from article",function(err,results){
       if(err)
        res.status(500).send(err.toString())
       else if(results.rows.length === 0)
        res.status(404).send("no data found")
       else if(results.rows.length>0)
        res.send(createArticleListTemplate(results.rows));
       else
        res.send("someerror has occured, please try later");
   });
});
app.get('/logout',function(req,res){
    delete req.session.auth;
    res.send("you are logged out");
})
app.get('/articles/:article_name',function(req,res){
    //pool.query("select title,content,comments from article where name = $1",[req.params.article_name],function(err,results){
    pool.query("select a.title,a.content,c.comments from article a join articlecomments c on a.Title= c.articletitle where a.name=$1",[req.params.article_name],function(err,results){
        if(err)
            res.status(500).send(err.toString());
        else
            if(results.rows.length===0)
                res.status(404).send("resource not found");
            else
                res.send(createtemplate(results.rows,req));
    });
    //
});


function createtemplate(data,req){
    var Atitle=data[0].title;
    var Acontent=data[0].content;
    var comments="";
    for(i=0;i<data.length;i++)
    {
       comments+= "<li>"+data[0].comments+"</li>"
    }
    var htmltemplate=`<html>
    <head>
        <title>${Atitle}</title>
        <link href="/ui/style.css" rel="stylesheet"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        
    </head>
    <body class="articles">
        <h1>${Acontent}</h1>`
            if(checkSessionExpiry(req))
            {
                htmltemplate+=`<textarea id="commentbox"rows=4 cols=40></textarea>
                            <button id="submitComment">Submit</button>`
            }
        
        //get the comments data here itself
        htmltemplate+=`<p><h3>Comments about this Article</h3></p>
        <ul id="commentsList">`+comments+`</ul>
        <script type="text/javascript" src="/ui/articlescript.js"></script>
        </body>
        </html>`;
return htmltemplate;
}

function createArticleListTemplate(titledata)
{
    const markup =
    `<html>
        <head>
            
        <body>
            <ul>
                ${titledata.map(temp => 
                    `<li><a href="http://chsreenivas92.imad.hasura-app.io/articles/${temp.name}">${temp.title}</li>`).join('')}
            </ul> </body>
    </html>`;
    return markup;
}
function checkSessionExpiry(req)
{
    if(req.session && req.session.auth && req.session.auth.userId)
        return true;
    return false;
}
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
/*function getComments()
{
    return
}*/
