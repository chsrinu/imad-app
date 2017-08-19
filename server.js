var express = require('express');
var morgan = require('morgan');
var path = require('path');
var counter=0;
var app = express();
app.use(morgan('combined') );

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/counter', function(req, res){
    counter++;
   res.send(counter);
});

app.get('/ui/main.js', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var articles={
    articleone:{title1:'Article One',
                content:'Hi I am Article one from India'},
    articletwo:{title1:'Article Two',
                content:'Hi I am Article two from US'}
};

app.get('/:article_name',function(req,res){
    var article_name=req.params.article_name;
    res.send(createtemplate(articles[article_name]))
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

function createtemplate(data)
{
    var Atitle=data.title1;
    var Acontent=data.content
    var htmltemplate= 
`<html>
    <head>
        <title>${Atitle}</title>
        <link href="ui/style.css" rel="stylesheet"/>
    </head>
    <body class="articles">
        <h1>${Acontent}</h1>
    </body>
</html>`;
return htmltemplate;
}
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
