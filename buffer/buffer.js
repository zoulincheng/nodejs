var buf1 = new Buffer(10);
var buf2 = new Buffer([10,20,30,40,50]);
var buf3 = new Buffer("Simply Easy Learning","utf-8");

//buf.write(string[, offset][, length][, encoding])
//test
var buf = new Buffer(256);
var len = buf.write("Simply Easy Learning");
console.log("Octets written : " + len);
for (let i = 0; i < len; i++){
  console.log(buf[i]);
}

console.log(buf.toString("ascii", 0, len));

var json = buf.toJSON();
console.log(json);
