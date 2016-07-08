var fs = require("fs");
fs.readFile('input.txt',function(err, data){
  if (err){
    return console.error(err);
  }
  console.log("Asynch read:" + data.toString());
});

//synchronous readFile
var data = fs.readFileSync('input.txt');
console.log("Synch read:" + data.toString());

console.log("end");
