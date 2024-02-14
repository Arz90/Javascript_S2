// Usa un for in para imprimir por consola los datos del alienigena.

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

for (const key in alien){ // for in nos devolverá las claves de 'alien'.// con 'const key' evitamos problemas de alcance.
    console.log(`${key}: ${alien[key]}`); //Así se consigue imprimir la clave y su valor asociado.
};