// convertir numero decimal a binario, intercambiar 0 a 1 y 1 a 0 regresar de binario a decimal.


function flippingBits(n) {
    // Write your code here
    let bin = n.toString(2)
    bin = bin.split("")
    for(let i=bin.length; i<32; i++){
        bin.unshift("0")
    }
    let result = bin.map(item => (item == 1?0:1))
    let dec = result.join("")
    dec = parseInt(dec,2)
    console.log(dec)
    return dec
 
}


flippingBits(3)
flippingBits(2147483647)
flippingBits(1)
flippingBits(0)
flippingBits(9)







// function flippingBits(n){
//     let sum = 0
//     let bin = n.toString(2)
//     bin = bin.split("")
//     console.log(bin);
    
//     for(let i=bin.length; i<32; i++){
//         bin.unshift("0")
//     }
//     console.log(bin);
//     let num = bin.map(item => (item == 1?0:1))

//     // console.log(num.join(""))

//     // console.log("Esto es: " + BinarioADecimal(num.join("")))

//     // for(let i=0; i<num.length; i++){
//     //     sum+=num[i]*2**(num.length-1-i);
//     // }
//     let dec = num.join("")
//     dec = parseInt(dec,2)
//     console.log(dec)
//     // console.log(sum)
// }

// flippingBits(9)

// function BinarioADecimal(num) {
//     let sum = 0;

//     for (let i = 0; i < num.length; i++) {
//        sum += +num[i] * 2 ** (num.length - 1 - i);
//     }
//     return sum;
// }

// console.log(BinarioADecimal("11111111111111111111111111110110"));