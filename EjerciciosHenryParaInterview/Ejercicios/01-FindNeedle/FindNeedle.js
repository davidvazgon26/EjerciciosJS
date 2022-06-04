function FindNeedle(haystack, needle) {
  // Your code here:

  // for (let i = 0; i < haystack.length; i++) {
  //   for (let j = 0; j < needle.length; j++) {
  //     if(haystack[i+j]!== needle[j]) break;
  //     if (j+1 === needle.length) return i
  //   }
  // }
  // return -1

  //complejidad temporal O(n*m)
  //complejidad espacial O(1)

  for (let i = 0; i < haystack.length; i++) {
      if(haystack.slice(i,i+needle.length)===needle)  return i  
  }
return -1
}

module.exports = FindNeedle;
