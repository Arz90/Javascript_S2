// Dado el siguiente javascript usa for of para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función `.includes()` o 'filter'.

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const newCategories = [];

for (const film of movies) {
  const filter = film.categories;

  for (const value of filter) {
    if (!newCategories.includes(value)) {
      newCategories.push(value);
    }
  }
};

console.log(`Estas son las categorias de películas: ${newCategories}`);
