

function validarRegexFisicaSinHomoclave(valor){

    return /^[A-Z]{4}[0-9]{6}$/.test(valor)

}


function validarRegexFisicaConHomoclave(valor){

    return /^[A-Z]{3,4}[0-9]{6}[0-9A-Z]{3}$/.test(valor)

}

console.log(validarRegexFisicaSinHomoclave("VAGD800926"));
console.log(validarRegexFisicaSinHomoclave("VAGD800926239"));
console.log(validarRegexFisicaConHomoclave("VAGD800926239"));
console.log(validarRegexFisicaConHomoclave("VAGD800926"));

console.log(validarRegexFisicaSinHomoclave("BSP090812"));
console.log(validarRegexFisicaConHomoclave("BSP090812JQ5"));
console.log(validarRegexFisicaConHomoclave("BSp090812JQ5"));
