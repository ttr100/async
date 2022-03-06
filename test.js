const fs = require('fs');

let data = fs.readFileSync('./test.zip');
let x = String(data)
console.log(x[0]);
console.log('AAA');

data = fs.readFileSync('./test.zip');
x = String(data)
console.log(x[0]);
console.log('BBB');

data = fs.readFileSync('./test.zip');
x = String(data)
console.log(x[0]);
console.log('CCC');

setInterval(() => console.log('on interval'), 20);



// ASYNC
fs.readFile('./test.zip', (err, data) => {
  let x = String(data)
  console.log(x[0]);

  fs.readFile('./test.zip', (err, data) => {
    let x = String(data)
    console.log(x[0]);

    fs.readFile('./test.zip', (err, data) => {
      let x = String(data)
      console.log(x[0]);
    });
    console.log('CCC');
  });

  console.log('BBB');
});
console.log('AAA');

setInterval(() => console.log('on interval'), 20);
