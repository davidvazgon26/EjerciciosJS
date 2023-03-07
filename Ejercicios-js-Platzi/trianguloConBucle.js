

function printTriangle(size, character){

    let cadena = "";
    for (let index = 1; index <=size; index++) {
        for (let i = size; i > 0; i --) {
             if(index<i){
                cadena = cadena + " " 
             }else{
                cadena = cadena + character
             }         
        }
        if(index !== size){cadena = cadena +  "\n";}
    }
    return cadena;
}

console.log(printTriangle(5,"*"));





