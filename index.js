// await digunakan utk menunggu sebuah operasi selesai

// promise adalah sebuah cara utk mengubah kode yang synchronous
// menjadi asynchronous
//
const axios = require('axios')

axios
  .get('https://httpbin.org/delay/2')
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })


async function asyncDownload(url){
  return new Promise((resolve) => {
    let result = downloadAnImage(url)
    resolve(result)
  })
}


let studentsData = [
  {name: 'Alice', pic: 'http://www.google.com/alice.png'},
  {name: 'Bob', pic: 'http://www.google.com/bob.png'},
  {name: 'Charlie', pic: 'http://www.google.com/charlie.png'},
]

function downloadStudentsPicture(){
  for(let i=0;i<studentsData.length;i++){
    console.log(`Downloading picture for ${studentsData[i].name}`)
    asyncDownload(studentsData[i].pic)
  }
}


function ReallyLongSquare(seconds){
  console.log(`STARTING X, will finish in ${seconds} seconds`)
  return new Promise((resolve) => {
    setTimeout(function(){
      let result = seconds * seconds
      console.log('REsolving to', result)
      resolve(result)
    }, seconds * 1000)
  })
}


async function SquareThenDouble(number){
  console.log('hello')
  let result = await ReallyLongSquare(number)
  console.log('got result: ', result)
  return result * 2
}

function doIt(){
  let num = 3;
  let finalResult = SquareThenDouble(num);
  console.log('FINAL', finalResult)
}


