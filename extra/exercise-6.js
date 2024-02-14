// Crea una función llamada ``swap`` que reciba un arrayay y dos parametros que sean indices del arrayay. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el arrayay resultante.

//Sugerencia de arrayay:

const miArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
 
function swap(array, indice1, indice2) {

    if (indice1 < 0 || indice1 >= array.length || indice2 < 0 || indice2 >= array.length) {
        
        return array; 
    }
    
    const inter = array[indice1];
    array[indice1] = array[indice2];
    array[indice2] = inter;

    return array;
};

console.log(swap(miArray, 1, 3)); 