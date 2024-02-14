//Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada `removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

//De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

const array1 = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];
const text1 = "Ajolote";
const text2 = "Jirafa";
const text3 = "Mosquito";
const text4 = "Dragón";

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++){
        if (array[i] === text){
            return i;
        }
        
    }
    return 'No existe este elemento en la array, sigue buscando';
    
};

function removeItem(array, text) {
  const index = findArrayIndex(array, text);

  if (typeof index === 'number') {
    array.splice(index, 1);
  }

  return array;
};

console.log(removeItem(array1, text1));
console.log(removeItem(array1, text2));
console.log(removeItem(array1, text3));
console.log(removeItem(array1, text4));
