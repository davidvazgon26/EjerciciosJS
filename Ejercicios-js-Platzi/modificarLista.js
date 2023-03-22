function processShoppingList(list) {
    let modifiedList = list.map((element) => {
      if (element.name.includes("oferta")) {
        element.price *= 0.8;
      }
  
      return {
        name: element.name,
        price: element.price * element.quantity
      }
    });
  
  
    let total = modifiedList.reduce((acc, element) => acc + element.price, 0);
  
    Object.assign(list, modifiedList);
  
    return total;
  }


  const shoppingList = [
    { name: "pan", price: 20, quantity: 2 },
    { name: "leche", price: 25, quantity: 1 },
    { name: "oferta manzanas", price: 10, quantity: 3 },
  ]

  console.log("Lista original")
  console.log(shoppingList);
  
  //Se pasa la lista a la funcion para procesarla
  processShoppingList(shoppingList);

  console.log("Lista modificada con Object.assign")  
  console.log(shoppingList)