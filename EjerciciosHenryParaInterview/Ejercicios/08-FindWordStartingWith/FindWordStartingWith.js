function FindWordStartingWith(book, query) {
  // Your code here:
      
      let arreglo = book.text.split('')
      let buscado =query.split('')
      let bandera = false
      let posiciones = []

      for(let i=0;i<arreglo.length-buscado.length;i++) {
        if(arreglo[i] === buscado[0]&& arreglo[i-1]===" "){
          bandera = true
          for(let j=1;j<buscado.length;j++) {
            if(arreglo[j+i] !== buscado[j]){
                 bandera = false;
                 break;
            }
           
          }
          
        }else{ bandera = false; continue}
        if(bandera === true) {
          posiciones.push(i)
        }
       
      }

      console.log(buscado)
      console.log(arreglo)
      console.log(arreglo.length)
      console.log(posiciones)
      return posiciones

}

module.exports = FindWordStartingWith;
