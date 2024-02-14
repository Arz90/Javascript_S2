// Dado el siguiente javascript usa for of y for in para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

// Calculo de media global

let totalVolume = 0;
let numberOfSounds = 0;

// Recorre los users
for (let user of users) {
  const userFavoritesSounds = user.favoritesSounds;

  for (let key in userFavoritesSounds) {
    const favoriteSound = userFavoritesSounds[key];

    totalVolume += favoriteSound.volume;
    numberOfSounds++;
  }
};

console.log("Media global:");
console.log(totalVolume / numberOfSounds);

// Parte 2. Medias parciales

for (let user of users) {
  const userFavoritesSounds = user.favoritesSounds;
  let userTotalVolume = 0;
  let userSoundsCount = 0;

  for (let key in userFavoritesSounds) {
    const favoriteSound = userFavoritesSounds[key];

    userTotalVolume += favoriteSound.volume;
    userSoundsCount++;
  }

  const userMean = userTotalVolume / userSoundsCount;
  console.log(`La media del usuario ${user.name} es ${userMean}`);
};
