const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let a = parseInt(result.input)
    let b = parseInt(a%10)
    let c = parseInt(a%100)
    let d = parseInt(c/10)
    let e = parseInt(a%1000)  
    let f = parseInt(e/100)
    let u = parseInt(a%10000)
    let y = parseInt(u/1000)
    console.log(b);
    console.log(d);
    console.log(f);
    console.log(y);
});
