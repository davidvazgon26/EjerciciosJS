// ver cuantas veces aparece cada elemento del array queries dentro del array strings
//Ejemplo string = ["ab", "ab", "abc"] queries = ["ab","abc","bc"] => [2,1,0]
let arr1 =  ["ab", "ab", "abc"]
let arr2 = ["ab","abc","bc"]

function matchingStrings(strings, queries){

    let r = queries.map(item => {
        let result = strings.filter(valor => valor == item)
        return result.length 
    })
    console.log(r)
}

matchingStrings(arr1, arr2)