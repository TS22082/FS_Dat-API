var fs = require('fs')

fs.readFile('hello.txt', function(err, data){
  if(err){
    console.log(err)
  } else {
    console.log('data is: ' + data.toString())
  }
})


var data = fs.readFileSync('hello.txt')
console.log('synced data is: ' + data.toString())
console.log('end sync')