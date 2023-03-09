

// Refactored code: 
function findLargestPalindrome(words) {
    const arrPalindromos = words.filter(element => {
        let revert = element.split("").reverse().join("");
        return element === revert;
    });
    if (arrPalindromos.length < 1) return null;

    let resultado = arrPalindromos.reduce((acc, curr) => curr.length > acc.length ? curr : acc);

    return resultado;
}

console.log(findLargestPalindrome(["racecar", "level", "world", "hello"]))
console.log(findLargestPalindrome(["racecar", "levvvel", "world", "hello"]))
console.log(findLargestPalindrome(["world", "hello"]))


// Explanation: In the refactored code, the .map() method was replaced with .filter() to check for palindromes, and the forEach loop was replaced with reduce() to find the longest palindrome in the array of palindromes.

// Aca una solucion  mas eficiente ya que solo itera una vez sobre el arreglo y al voltear las palabras para ver si es palindromo solo recorre la mitad del string reduciendo las iteraciones necesarias.

/**
 
function findLargestPalindrome(words) {
  let longestPalindrome = null;

  words.forEach(word => {
    let isPalindrome = true;
    let length = word.length;
    let halfLength = Math.floor(length / 2);

    for (let i = 0; i < halfLength; i++) {
      if (word[i] !== word[length - i - 1]) {
        isPalindrome = false;
        break;
      }
    }

    if (isPalindrome && (!longestPalindrome || word.length > longestPalindrome.length)) {
      longestPalindrome = word;
    }
  });

  return longestPalindrome;
}




 */