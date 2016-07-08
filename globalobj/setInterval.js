function printHello(){
   console.log( "Hello, World!");
}

function printInfo(){
   console.log( "info!");
}
// Now call above function after 2 seconds
setInterval(printHello, 2000);

setInterval(printInfo, 1000);
