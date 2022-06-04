// function solution(arr) {
//     let r = []
   
//    while(arr.length>=3){
//         if(arr[0]+arr[1]>arr[2]){
//             if(arr[1]+arr[2]>arr[0]){
//                 if(arr[2]+arr[0]>arr[1]){
//                     r.push(1)
//                 }else{ r.push(0)}
//             }else{ r.push(0)}
//         }else{ r.push(0)}
//     arr.shift()
//    }
    
//     return r
// }


function solution(a) {
    // console.log(a)
    let b = []
    let c = []
    
   
    while(a.length>0){
        let p = a.shift()
        if(b.includes(p)&& c.includes(p)){ 
            console.log([])
            return []}
        if(b.length>c.length || b.includes(p)){
            c.push(p)
        }else{
             b.push(p)
        }
    }
    console.log([b,c])
    return [b,c]
}

solution([2, 1, 2, 3, 3, 4])