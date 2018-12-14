var fs = require('fs')
var Dat = require('dat-node')

Dat('/', function (err, dat) {
  if (err) throw err
  dat.importFiles()
  dat.joinNetwork()
  console.log('My Dat link is: dat://', dat.key.toString('hex'))
})

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