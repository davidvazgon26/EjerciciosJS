

function numerosMenores(num){
    try {
        if (num > 50) {
          throw new Error("El número es mayor a 50");
        }
        console.log(num);
      } catch (error) {
        // console.log(error)
        console.error(error.message);
      }
}

numerosMenores(10);
numerosMenores(35);
numerosMenores(50);
numerosMenores(55);
numerosMenores(5);

