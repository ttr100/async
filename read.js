const fs = require('fs');

// promise // sebuah cara utk bekerja dengan kode aysnc


// BLOCKING
function readSync(){
  console.log('reading')
  let f = fs.readFileSync('aaa.mkv')
  console.log('after')
  console.log(f.length)
}

const fsPromise = require('fs/promises');

// NON-BLOCKING
async function readPromise(){
  console.log('reading')
  let f = await fsPromise.readFile('aaa.mkv')
  console.log('after')
  console.log(f.length)
}

// NON-BLOCKING, Non promise
function readAsync(){
  console.log('reading')
  // tidak blocking
  fs.readFile('aaa.mkv', (err, file) => {
    console.log(file.length)
  })
}


setInterval( () => console.log('abc'), 10)

readAsync()
// readSync()
// readPromise()
