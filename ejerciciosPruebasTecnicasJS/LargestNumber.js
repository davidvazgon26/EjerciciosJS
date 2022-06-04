//Dado un entero n, devuelve el número más grande que contiene exactamente ndígitos.

function solution(n) {
    let str = ""
    if (n ==0 || n == 1) {  return 9}
   
    for (let i = 0; i < n; i++) {
        
            str = str+"9"
    }

    console.log(str)
    return parseInt(str)
}


solution(2)