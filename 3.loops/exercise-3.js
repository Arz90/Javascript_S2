//Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array.

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

const newPlacesToTravel = []; // nueva array donde irán los destinos filtrados

for (const places of placesToTravel) {
  // sacamos los valores de la array 'placesToTravel'
  if (places.id !== 11 && places.id !== 40) {
    // la condición del filtro es que si no es igual a lo que se marca....
    newPlacesToTravel.push(places); // se añadiran a través de '.push' a la nueva array
  }
};

console.log(newPlacesToTravel);


