// Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.


const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

for (let key in alumns){
    let trimestre = 0; // Variable contadora donde almacenamos los datos del conteo.
    if (alumns[key].T1 === true){ // Entramos en alumns buscando en el T1 que exista True y añadimos a Trimestre.
        trimestre++;
    } 
    if (alumns[key].T2 === true){ //Lo mismo con T2
        trimestre++;
    }
    if (alumns[key].T3 === true){ //y T3
        trimestre++;
    }

    if (trimestre >= 2){ 
        alumns[key].isApproved = true; // añade isApproved 
    
    } else {
        alumns[key].isApproved = false;
    }

};

console.log(alumns);