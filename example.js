
/**
 * Example.
 */

var hurry = require('./');

var max = 1500;

takesALongTime(hurry(max, function(res){
  console.log(res || 'sorry, can\'t wait'); // => sorry, can't wait
}));

isFast(hurry(max, function(res){
  console.log(res || 'sorry, can\'t wait'); // => I'm faster
}));

function takesALongTime(fn){
  setTimeout(fn, 3000, 'wait for me!');
}

function isFast(fn){
  setTimeout(fn, 1000, 'I\'m faster!');
}
