// Usa un bucle for of para recorrer todos los toys y elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.Itera sobre los elementos que quieras eliminar.

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

const newToys = [];

for (const toy of toys) {
  
  if (!toy.name.includes("gato")) { //si no esta la palabra gato.
    newToys.push(toy); // lo incluye en la nueva array.
  }
};

console.log(newToys);
