function FindNeedle(haystack, needle) {
  // Your code here:
  if(haystack.includes(needle)){
    
    for(let i=0;i<haystack.length;i++){
        let cont = 1
        if(haystack[i]===needle[0]){
          for(j=1;j<needle.length;j++){
            if(haystack[i+j]===needle[j]){
                cont+=1
            }
          }
        }
        if(cont === needle.length){ return i}
      }

    }else{ return -1}



}

module.exports = FindNeedle;

//Aproximacion

// recibo: string en haystack, palabra a encontrar en needle

//ambos argumentos son string

// validar si existe la palabra dada en el segundo argumento dentro del string, si no es asi devolver -1

// Si existe debemos devolver el indice de la primera letra de la palabra buscada despues de recorrer el string

//Para no hacer el recorrido de los 2 loop completos vamos validando que encuentre la primera letra, hasta entonces activamos el segundo loop

//llevar un contador para detener el segundo loop cuando tenga el mismo tamanio que la palabra buscada

//No usar indexOf()

