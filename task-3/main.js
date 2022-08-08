const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
var input = result.input;
var numbers = input.split(',')
var firstNumber = parseInt(numbers[0]);
var secondNumber = parseInt(numbers[1]);
var resultNumber = firstNumber**secondNumber
console.log(resultNumber);


  
});
