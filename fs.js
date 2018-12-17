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