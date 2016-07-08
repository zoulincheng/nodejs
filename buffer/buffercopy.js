var buffer1 = new Buffer('ABC');
//copy a buffer
var buffer2 = new Buffer(3);
buffer1.copy(buffer2, 0, 1, 2);
console.log("buffer2 content: " + buffer2.toString());
