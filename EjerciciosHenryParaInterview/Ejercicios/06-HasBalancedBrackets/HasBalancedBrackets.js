function HasBalancedBrackets(string) {
  // Your code here:

    const obj = {
      '{':'}',
      '[':']',
      '(':')',
    };

    const openBrackets = [];

    for (let i = 0; i < string.length; i += 1) {
      // si existe la propiedad significa que es un opening bracket entonces lo guardamos
      if (obj[string[i]]) {
        openBrackets.push(string[i]);
      } else if (obj[openBrackets.pop()] !== string[i]) {
         // Si no nos fijamos que el closing bracket corresponda con el ultimo opening bracket
         return false;
      }
  }
  // una vez que terminamos de recorrer
  // chequeamos que no haya quedado nada en el arreglo
  return !openBrackets.length;


}



module.exports = HasBalancedBrackets;
