const fs = require('fs');

const startingFileName = 'start.txt'

// baca 4 file

// buka file start.txt
// di dalam file tsb, ada sebuah nama file. buka isi file tsb. // second
// di dalam file kedua, ada sebuah nama file lg. buka isi file tsb. // third
// di dalam file ketiga, ada sebuah nama file terakhir. console.log isi file tsb // final
//
// pakai fs.readFile

function addTXT(string){
    return string+".txt"
}

function roadToFinal(){
    fs.readFile(startingFileName, (err, data) =>{
        console.log(`Data 1 = ${String(data)}`)
        console.log(`reading ${addTXT(String(data))}`)

        fs.readFile(addTXT(String(data)), (err, data)=>{
            console.log(`Data 2 = ${String(data)}`)
            console.log(`reading ${addTXT(String(data))}`)
            
            fs.readFile(addTXT(String(data)), (err, data)=>{
                console.log(`Data 3 = ${String(data)}`)
                console.log(`reading ${addTXT(String(data))}`)
                
                fs.readFile(addTXT(String(data)), (err, data)=>{
                    console.log(`Data 4 = ${String(data)}`)
        
                })
            })
        })

    })
}

roadToFinal()
