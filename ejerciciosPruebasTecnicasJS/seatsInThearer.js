function solution(nCols, nRows, col, row) {

    result = ((nCols-col)*(nRows-row))+nRows-row
    console.log(result)
}

solution(16, 11, 5, 3)