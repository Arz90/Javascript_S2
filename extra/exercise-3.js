//Dado el siguiente javascript usa for of y for in para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios y usa for in para recoger el nombre de los sonidos que el usuario tenga como favoritos. Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript.


const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

// usa for of y for in para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito

// Para ello recorre la lista de usuarios y usa for in para recoger el nombre de los sonidos que el usuario tenga como favoritos

//Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario

const soundRepeat = {};


for (const user of users) { // itera la lista de usuarios
    
    for (const sound in user.favoritesSounds) { // itera los sonidos favoritos de todos los usuarios.
        
        if (soundRepeat[sound]) { // comprueba si el sonido esta en la lista nueva creada.
            soundRepeat[sound]++; // si no esta, añadelo.
        } else {
            soundRepeat[sound] = 1; // si no existe empieza el conteo en 1.
        }
    }
};


for (const sound in soundRepeat) {
    console.log(`"${sound}" ha sido favorito ${soundRepeat[sound]} veces.`);
};

