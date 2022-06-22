//Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), 
//pe. miFuncion(2002) devolverá true.

const capicua = (num)=>{

    let result = (num+"");
    let result2 = (num+"").split('').reverse().join('');

    if(result === result2){
        return "el numero ingresado es capicua"
    }else{
        return "el numero ingresado no es capicua"
    }

}

console.log(capicua(133))
console.log(capicua(333))