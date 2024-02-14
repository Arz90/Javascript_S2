//Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

//Haz varios ejemplos y compruebalos.

//Sugerencia de función:

const newArray = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
const position1 = 'Caracol';
const position2 = 'Salamandra';
const position3 = 'Mosca cojonera'

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++){
        if (array[i] === text){
            return i;
        }
        
    }
    return 'No existe este elemento en la array, sigue buscando';
    
};

console.log(`Este elemento se encuentra en la posición ${findArrayIndex(newArray, position1)} del array`);
console.log(`Este elemento se encuentra en la posición ${findArrayIndex(newArray, position2)} del array`);
console.log(findArrayIndex(newArray, position3));

