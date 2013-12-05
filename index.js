
/*!
 *
 * hurry
 *
 * MIT
 *
 */

/**
 * Decorates `fn` to run after `ms`
 * have passed if it hasn't been called
 * already.
 *
 * @param {Number} ms
 * @param {Function} fn
 * @return {Function}
 * @api public
 */

module.exports = function(ms, fn){
  var timeout = setTimeout(proceed, ms);
  var invoked = false;

  return proceed;

  function proceed(){
    if (invoked) return;
    invoked = true;
    clearTimeout(timeout);
    fn.apply(this, arguments);
  }
};
