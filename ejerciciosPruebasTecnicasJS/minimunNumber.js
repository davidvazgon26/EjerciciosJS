//String words[] =  { "ab", "aab", "abb", "abab", "abaaaba" };

//Si se repiten las letras en su consecutivo devolver o contar uno, ejemplo en "ab" no se repite por lo que seria 0
//En "aab" seria 1 porque se repite la a de manera consecutiva.
//Mismo caso en "abb" porque se repite b
// "abab" seria 0 porque no se repite de manera consecutiva

const words = ["ab", "aab", "abb", "abab", "abaaaba" ] 

function minimumNumber(items){
    let count;
    let arr = [];

    items.forEach(element => {
        count = 0;
        for (let i = 0; i < element.length-1; i++) {
            if (element[i]===element[i+1]) {
                count++
                i++;
            }            
        }
        arr.push(count);
    });

    return arr
}


minimumNumber(words).forEach(item => console.log(item))