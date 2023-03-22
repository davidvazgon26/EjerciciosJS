//Para mejorar el rendimiento de la aplicacion al l;impiar el recolector de basura estos valores al dejar de estar en uso.

const ws = new WeakSet();

let valor1 = {"valor1":1};
let valor2 = {"valor2":2};
let valor3 = {"valor3":3};

ws.add(valor1);
ws.add(valor2);

console.log(ws);

console.log(ws.has(valor1));


console.log("**************************************")

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1,1);
wm.set(llave2,2);
console.log(wm);

console.log(wm.has(llave1));
console.log(wm.has(llave3));

console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));


wm.delete(llave2);
console.log(wm);