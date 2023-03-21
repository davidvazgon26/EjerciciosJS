

function groupProducts(products, category) {
    // Tu código aquí
    let obj = products.filter(el => el.category === category );
    const tot = obj.reduce((accumulator, currentValue) => accumulator.price + currentValue.price)

    const result = {
        products: obj.map(el => el.name).join(', '),
        totalPrice: tot
    }

    console.log(result)
    return result

  }
  

  // Input:
const products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];

groupProducts(products, "Electronics")

/*
Output: {
  products: "Smartphone, Laptop",
  totalPrice: 2000,
}
*/

groupProducts(products, "Clothing")

/*
Output: {
  products: "Shirt, Pants",
  totalPrice: 150,
}
*/