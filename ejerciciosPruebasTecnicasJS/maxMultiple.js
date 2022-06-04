// Dados a divisory a bound, encuentre el entero más grande Ntal que:

// Nes divisible por divisor.
// Nes menor o igual que bound.
// Nes mayor que 0.
// Se garantiza que tal número existe.

function solution(divisor, bound) {
    
    let result = Math.floor(bound / divisor)
    console.log(result*divisor)
}


solution(3, 10) 