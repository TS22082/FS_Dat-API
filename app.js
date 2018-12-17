var fs = require('fs')
var Dat = require('dat-node')
const readline = require('readline')


// Creates dat stream in specified folder
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

rl.question('Specify path for dat creation: ', (path) => {
  Dat(path, function (err, dat) {
    if (err) throw err
    try {
      dat.importFiles(function (err) {
        if (err) {
          console.log(err)
          console.log('most likely already have a dat stream initiated')
        }
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


//read file
fs.readFile('hello.txt', function(err, data){
  if(err){
    console.log(err)
  } else {
    console.log('data is: ' + data.toString())
  }
})

///add to file
fs.appendFile('hello.txt', ' more text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

//replace context
fs.writeFile('hello.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});

//rename
fs.rename('hello.txt', 'delete.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

//delete
fs.unlink('delete.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
