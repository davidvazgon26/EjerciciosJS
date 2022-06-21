function MaxValue(shares) {
  // Your code here:
  

  // let max = shares[1]-shares[0]
  // for (let i = 0; i < shares.length; i++) {
  //   for (let j = i+1; j < shares.length; j++) {
  //     const nuevo= shares[j]-shares[i]
  //     max = nuevo>max? nuevo : max      
  //   } 
  // }


  let max = shares[1]-shares[0];
  let minPrice = shares[0];

  for (let i = 0; i < shares.length; i++) {
  const ganancia =   shares[i] - minPrice;
  max = Math.max(max, ganancia);
  minPrice = Math.min(minPrice, shares[i]) 
  }

 return max
}

 //complejidad temporal O(n^2)  porque recorre 2 veces el mismo arreglo
  //complejidad espacial O(1)

  //Duda con el 23 de inicio, pero asi lo explicaron
  



module.exports = MaxValue;
