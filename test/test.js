
var assert = require('assert');

var hurry = require('../');

var i = 0;
var cnt = 2;
var max = 1500;

var time = Date.now();

takesALongTime(hurry(max, function(res){
  i++;
  console.log(res || 'sorry, can\'t wait'); // => sorry, can't wait
  --cnt || done();
}));

isFast(hurry(max, function(res){
  i++;
  console.log(res || 'sorry, can\'t wait'); // => I'm faster
  --cnt || done();
}));

function done(){
  assert(2 === i);
  assert(Date.now() - time < 1600);
  console.log('OK');
}

function takesALongTime(fn){
  setTimeout(fn, 3000, 'wait for me!');
}

function isFast(fn){
  setTimeout(fn, 1000, 'I\'m faster!');
}
