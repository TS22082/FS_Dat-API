var fs = require('fs')
var Dat = require('dat-node')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// rl.question('Specify path for dat creation: ', (path) => {
//   Dat(path, function (err, dat) {
//     if (err) throw err
//     dat.importFiles()
//     dat.joinNetwork()
//     console.log('My Dat link is: dat://', dat.key.toString('hex'))
//     console.log(`Initiated DAT in file location: ${path}`);
//   })
//   rl.close();
// });


//read
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

//replcae context
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
