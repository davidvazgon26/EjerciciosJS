// variables

var a; // Declaracion de la variable a
var b = 'b' //Declarando y asignando variable
b='bb' // re asignando
var a = 'aa' // redeclaracion

// Global Scope

var fruit = 'apple' //Variable global

function bestFruit(){
    console.log(fruit);
}

bestFruit();

nameOfDog("Elmo"); function nameOfDog(name) { console.log(name); };

const fruits = () => {
  if (true) {
    var fruit1 = "apple";
    const fruit2 = "banana";
    let fruit3 = "kiwi";
  }
};