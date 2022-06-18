// Programa una función que repita un texto X veces,
// pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.





const repetir = function(str, num){
    if(str ===""){console.warn("No hay nada que repetir"); return;}
    if(num ===""){console.warn("No hay numero"); return;}
    
    for(let i=0;i<num;i++){
        console.log(str);
    }
}

repetir("Hola Mundo",3);
