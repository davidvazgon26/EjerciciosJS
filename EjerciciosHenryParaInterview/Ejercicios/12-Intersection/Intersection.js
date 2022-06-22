function intersection(arr1, arr2) {
  // Your code here:
  let array =[]
  for(let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i])){
          array.push(arr1[i]);
        }
  }

  return array

}

module.exports = intersection;
