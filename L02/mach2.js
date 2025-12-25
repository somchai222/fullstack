const productPricte = 1599.50;
const vatRate = 0.07;
const totalPrice = productPricte * (1 + vatRate);
const roundedPrice =  Math.round(totalPrice * 100) / 100;
console.log(`Total price including VAT: ${roundedPrice}`);


const FixedPrice = totalPrice.toFixed(2);
console.log(`Fixed total price including VAT: ${FixedPrice}`);