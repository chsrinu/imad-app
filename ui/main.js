var express = require('express');
var morgan = require('morgan');
console.log('Loaded!');
var marginleft=0;
$(".img-medium").click(function() {
   marginleft+=20;
  var outp= "clicked " +marginleft+" times";
   $('#counter').html(outp);
});
