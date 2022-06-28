//Programa una función para convertir números de base binaria a decimal y viceversa, 
//pe. miFuncion(100,2) devolverá 4 base 10.


const binarionADecimal = (bin,n) =>{
    let binario = (bin+"").split('')
    let result = 0;
    let cont = 0
    let num = null

   while(binario.length>0){
    num = binario.pop()
    if(num == 0){
        cont++
        continue
    }else{
        result =result + num*(Math.pow(2,cont))
    }
    cont++
   }

   console.log(result)
   
}


binarionADecimal(100,2);
binarionADecimal(110,6);
binarionADecimal(1100,12);
binarionADecimal(111,7);