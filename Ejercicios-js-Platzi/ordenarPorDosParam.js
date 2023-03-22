function sortByAvailabilityAndPrice(products) {
    // Tu código aquí 👈
    return [...products].sort((a, b) => {
  
      if (b.inStock != a.inStock)
        return a.inStock ? -1 : 1
  
      return (a.price - b.price)
    })
  }


  const products = [
    { name: "product1", price: 10, inStock: true },
    { name: "product2", price: 20, inStock: false },
    { name: "product3", price: 15, inStock: true },
    { name: "product4", price: 5, inStock: false },
  ]
  
  let arrayOrdenado = sortByAvailabilityAndPrice(products)

  console.log(arrayOrdenado)

  /*
Output:
[
  { name: "product1", price: 10, inStock: true },
  { name: "product3", price: 15, inStock: true },
  { name: "product4", price: 5, inStock: false },
  { name: "product2", price: 20, inStock: false },
]

  */