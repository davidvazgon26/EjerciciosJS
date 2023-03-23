
    // Tu código aquí 👈
    Array.prototype.myFilter = function (callback) {
  
      const filtered = []
  
      for (const item of this)
        if (callback(item) === true) filtered.push(item)
  
      return filtered
  
    }
  

    const array = [1,2,3,4,5,6]
    console.log(array.myFilter(num => num % 2 === 0)) // [2,4,6]