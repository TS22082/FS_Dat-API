var fs = require('fs')
var Dat = require('dat-node')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Specify path for dat creation: ', (path) => {
  Dat(path, function (err, dat) {
    if (err) throw err
    try {
      dat.importFiles(function (err) {
        if (err) throw err
      })
      dat.joinNetwork()
      console.log('My Dat link is: dat://', dat.key.toString('hex'))
      console.log(`Initiated DAT in file location: ${path}`)
    } catch {
      console.log('Are you sure you ahvent already created a dat stream here?')
    }
  })
  rl.close()
})

