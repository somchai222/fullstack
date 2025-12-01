let status1 = 700;
if (status1 === 200){
    console.log("OK");
}
else if (status1 === 400){
    console.log("Error");
}else{
    console.log("Unknown");
}



switch (status1) {
    case 200:
        console.log("OK");
        break;
    case 400:
        console.log("Error");
        break;
    default:
        console.log("Unknown");
}

const result = (status1 === 200) ? "OK" : "Error";
console.log(result);
