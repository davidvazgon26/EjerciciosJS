function solution(n) {
    if (n>9 && n<100) {
        num = n+""
        num = num.split("")
        num = parseInt(num[0])+parseInt(num[1])
        console.log( num)
        return num
    }else{
        return console.log( `${n} not have two positions `)
    }
   
}


solution(299)