function printHello(){
  console.log("hello, world!");
}
var t = setTimeout(printHello, 2000);

clearTimeout(t);
