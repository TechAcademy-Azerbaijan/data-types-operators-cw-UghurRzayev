const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    var input = result.input;
    var numbers = input.split(',');
    var a = parseInt(numbers[0]);
    var b = parseInt(numbers[1]);
    var bolme = a/b 
    console.log(bolme);
});
