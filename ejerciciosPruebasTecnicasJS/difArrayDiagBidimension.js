// sumar las diagonales de un arreglo Bidimensional
// 3  //devuelve dimension 3x3
// 11 2 4
// 4 5 6
// 10 8 -12
// devuelve 15

let array= [[11,2,4],[4,5,6],[10,8,-12]];

function arrayBidimension(arr){
    let n = arr.length;
    let array = []
    let sumLeft = 0
    let sumRight = 0

    for (let i = 0; i < n; i++) {
        arr[i].forEach((el, index) => {
          if(index==i){sumLeft = sumLeft + el }
          if(index==n-1-i){sumRight = sumRight + el }
        })
    }
    console.log((sumLeft-sumRight)<0?(sumLeft-sumRight)*(-1):sumLeft-sumRight)
    return (sumLeft-sumRight)<0?(sumLeft-sumRight)*(-1):sumLeft-sumRight


}

arrayBidimension(array)