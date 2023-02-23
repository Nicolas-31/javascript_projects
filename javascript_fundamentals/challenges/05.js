const calculateTotal = function(subTotal, tax){
    return subTotal + tax;  
}

console.log(calculateTotal(10, 2)); // 12

const order1 = calculateTotal(10,20)
const order2 = calculateTotal(20,30)
const order3 = calculateTotal(30,40)
console.log(order1, order2, order3)