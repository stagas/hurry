
# hurry

invokes a function if it's taking too long

## Installing

`npm install hurry`

`component install stagas/hurry`

## Example

```js
var hurry = require('hurry');

// maximum time to wait
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
```

## API

### fn = hurry(ms, fn)

Decorates `fn` to run after `ms`
have passed if it hasn't been called
already.

## License

MIT
