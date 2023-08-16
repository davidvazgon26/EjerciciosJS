const months = ["March", "Jan", "Feb", "Dec"];
console.log("Array:", months);
months.sort();
console.log("Ordenado:", months);

const numbers = [1, 30, 4, 21, 100000];
console.log("Array de nuemeros:", numbers);
numbers.sort();
console.log("Solo con sort: ", numbers);
numbers.sort((a, b) => a - b);
console.log("Sort por Peso: ", numbers);
numbers.sort((y, z) => z - y);
console.log("Por peso al reves: ", numbers);

const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];
console.log("Original: ", words);
words.sort();
console.log("Sort: ", words);
words.sort((a, b) => b.localeCompare(a));
console.log("Sort y compare: ", words);

const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
console.log("Objeto original", orders);
orders.sort((a, b) => a.total - b.total); //puede ser cual quier par de letras en todos los ejercicios
console.log("Objeto Ordenado por sort: ", orders);
