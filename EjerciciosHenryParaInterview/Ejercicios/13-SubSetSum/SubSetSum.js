function subsetSum(nums, n) {
  // Your code here:
  let arr = nums.filter(item=> item<=n)
  let arr2 =[]

  if(arr.includes(n)){return true}

  const tot = arr.reduce((prev, curr) => prev + curr, 0)

  if(tot===n){return true}
  if(tot<n){return false}

  for(let i=0;i<arr.length;i++) {
    if(n === (tot - arr[i] )){return true}
    if((tot-arr[i])<n){ arr2.push(arr[i])}
  }

  return false

}

module.exports = subsetSum;
