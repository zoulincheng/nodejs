var buf1 = new Buffer("abc1");
var buf2 = new Buffer("dev2");
var buf3 = new Buffer("EE3");

var buf4 = Buffer.concat([buf1,buf2,buf3]);
console.log(buf4.toString());
