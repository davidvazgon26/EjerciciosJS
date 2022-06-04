function solution(min1, min2_10, min11, s) {
    let min = 0
    let cont = 0
    
    if(s>=min1){
        min = min + 1
        s= s-min1
        cont = cont + 1
    }else{ min = 0}
    
    while (s>=min2_10 && cont<10) {
            min = min + 1
            s = s-min2_10
            cont = cont + 1
    }

    while (s>=min11 && cont>=10) {
        min = min + 1
        s = s-min11
    }
   
    console.log(min, s)
    return min
}

solution(3, 1, 2, 20)
solution(1, 2, 1, 6)
