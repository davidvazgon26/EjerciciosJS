// nlos niños tienen mcaramelos. Quieren comer tantos dulces como puedan, pero cada niño debe comer exactamente la misma cantidad de dulces que cualquier otro niño. Determine cuántos dulces comerán todos los niños juntos. Las piezas individuales de dulces no se pueden dividir.

function solution(n, m) {
    let result = Math.floor(m/n)
    console.log(result*n)
    return result*n
}


solution(3, 10)