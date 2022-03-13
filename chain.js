const fs = require('fs');

const startingFileName = 'start.txt'

// baca 4 file

// buka file start.txt
// di dalam file tsb, ada sebuah nama file. buka isi file tsb. // second
// di dalam file kedua, ada sebuah nama file lg. buka isi file tsb. // third
// di dalam file ketiga, ada sebuah nama file terakhir. console.log isi file tsb // final
//
// pakai fs.readFile
function roadToFinal(){
  fs.readFile(`data/${startingFileName}`, function(err, data){
    let secondFile = String(data).trim()
    fs.readFile(`data/${secondFile}`, function(err, data){
      let thirdFile = String(data).trim()
      fs.readFile(`data/${thirdFile}`, function(err, data){
        let finalFile = String(data).trim()
        fs.readFile(`data/${finalFile}`, function(err, data) {
          console.log(`Content of final file is: ${String(data)}`)
        })
      })
    })
  })
}

const fsPromise = require('fs/promises')

async function roadToFinalPromise(){
  // let secondFile = String(await fsPromise.readFile(`data/${startingFileName}`)).trim()
  let temp = await fsPromise.readFile(`data/${startingFileName}`)
  let secondFile = String(temp).trim()

  let thirdFile = String(await fsPromise.readFile(`data/${secondFile}`)).trim()
  let finalFile = String(await fsPromise.readFile(`data/${thirdFile}`)).trim()
  let finalFileContent = String(await fsPromise.readFile(`data/${finalFile}`)).trim()

  console.log(`Content of final file is: ${finalFileContent}`)
}

roadToFinalPromise()
