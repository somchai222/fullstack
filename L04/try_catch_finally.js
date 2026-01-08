function criticalCode(){
    throw "throwing an exception";
}

function logError(theException){
    console.log("Error: " + theException);
}


console.log("\n**********try...catch...finally example**********");

try {
    criticalCode();

}catch(ex){
    console.log("Got an error");
    logError(ex);
}

console.log("\n**********try...finally example**********");


try{
    throw"An exception that is thrown every time";
}catch(ex){
    console.log("GOt an error");
    logError(ex);
}

console.log("\n**********try...catch...finally example**********");


try{
    criticalCode();
}catch(ex){
    console.log("Got an error");
    logError(ex);

}finally{
    console.log("Code the always will run");
}

function hello(){
    console.log("\n**********throwing Exception***********\n");
}