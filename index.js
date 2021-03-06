



function calculateBill (price, vat, tip) {

    const poundSign = "£";
    let vatCalc = price * vat / 100;
    let total = price + tip + vatCalc;
    const notNumber = typeof total !== 'number' || typeof vat !== 'number' || typeof tip !== 'number'
    
    if (notNumber) {
        return 'error'
    } else {
        return poundSign + total;
    };


}


module.exports = calculateBill;
