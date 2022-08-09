const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {

var a = parseInt(result.input);
var s = 6 * a ** 2
var v = a ** 3
console.log(s,v);
});
