var fs = require("fs");
//Asynch
console.log("open file");
fs.open('input.txt', 'r+', function(err,fd){
  if (err){
    return console.error(err);
  }
  console.log("file open successfully!");
});
