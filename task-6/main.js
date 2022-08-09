const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let a = parseInt(result.input)
let b = a/10
let c = parseInt(b)
console.log(c);
  
});
