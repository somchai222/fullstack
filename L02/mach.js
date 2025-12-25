function generateTempID(){
    const randomPart = Math.random().toString(36).substring(2, 8);
    return randomPart.toUpperCase();
}
const orderId = generateTempID();
console.log(`Your temporary order ID is: ${orderId}`);