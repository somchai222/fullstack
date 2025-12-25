const fullname = "Somchai Prasert";
const cleanName = fullname.trim();
console.log(cleanName);

const nameParts = cleanName.split(" ");
console.log(nameParts);


const filalPart =  nameParts.filter(Boolean);
console.log(filalPart);


const FirstName = filalPart[0];
console .log(FirstName);
