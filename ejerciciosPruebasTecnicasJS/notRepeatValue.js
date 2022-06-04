// validar en un array el elemento que no se repite 
// ejemplo [1,2,3,4,3,2,1] => 4
let array = [1,2,3,4,3,2,1,4,9] 

function lonelyInteger(arr){
    let bandera = true
    
    while(bandera){
        
        let el = arr.splice(0,1)
        if(arr.includes(el[0])){
            arr.push(el[0])
        }
        else{
            bandera = false
            console.log(el[0])
            return el[0]
        }
    }




}

lonelyInteger(array)