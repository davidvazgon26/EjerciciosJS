//Programa una función que valide que un texto sea un email válido, pe.



const isMail = (mail) => {

    if(/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){

        //expresion regular de jmircha
        //  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i


        return console.log(` ${mail} es una direccion valida`)
    }else{
        return console.log(` ${mail} NO es una direccion valida`)
        
    }


}

isMail("davidvazgon@hotmail.com")
isMail("fsbj.fk.hdfjlgdjhfg/k")
isMail("234567890")
isMail("sdgsff@sfbddgdggngn.com")
isMail("2446%&^%##%UT@gmial.com")