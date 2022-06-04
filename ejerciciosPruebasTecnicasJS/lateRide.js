function solution(n) {
    let hh = n/60 | 0
    let mm = n%60
    console.log(hh)
    console.log(Math.floor(hh/10)+Math.floor(hh%10)+Math.floor(mm/10)+Math.floor(mm%10))
    return (Math.floor(hh/10)+Math.floor(hh%10)+Math.floor(mm/10)+Math.floor(mm%10))
     
}

solution(24)