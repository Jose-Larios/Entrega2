const productos = [
  {
    id: 1,
    titulo: "The Legend of Zelda: Breath of the Wild",
    precio: 59.99,
    descripcion:
      "Un juego de mundo abierto lleno de aventuras en el reino de Hyrule.",
    categoria: "Videojuego",
    imagen: "/img/The Legend of Zelda Breath of the Wild.jpg",
  },
  {
    id: 2,
    titulo: "God of War",
    precio: 49.99,
    descripcion:
      "Kratos y su hijo Atreus se embarcan en una aventura en la mitología nórdica.",
    categoria: "Videojuego",
    imagen: "/img/God of War.jpg",
  },
  {
    id: 3,
    titulo: "Red Dead Redemption 2",
    precio: 39.99,
    descripcion: "Una historia épica de vaqueros en el salvaje oeste.",
    categoria: "Videojuego",
    imagen: "/img/Red Dead Redemption 2.jpg",
  },
  {
    id: 4,
    titulo: "Super Mario Odyssey",
    precio: 59.99,
    descripcion:
      "Mario recorre mundos en 3D para rescatar a la princesa Peach de Bowser.",
    categoria: "Videojuego",
    imagen: "/img/Super Mario Odyssey.jpg",
  },
  {
    id: 5,
    titulo: "The Witcher 3: Wild Hunt",
    precio: 29.99,
    descripcion:
      "Un RPG épico donde juegas como Geralt de Rivia, un cazador de monstruos.",
    categoria: "Videojuego",
    imagen: "/img/The Witcher 3 Wild Hunt.jpg",
  },
  {
    id: 6,
    titulo: "Cyberpunk 2077",
    precio: 59.99,
    descripcion:
      "Un juego de rol de mundo abierto ambientado en un futuro distópico.",
    categoria: "Videojuego",
    imagen: "/img/Cyberpunk 2077.jpg",
  },
  {
    id: 7,
    titulo: "Minecraft",
    precio: 26.95,
    descripcion:
      "Un juego de construcción en un mundo de bloques con infinitas posibilidades.",
    categoria: "Videojuego",
    imagen: "/img/Minecraft.jpg",
  },
  {
    id: 8,
    titulo: "Call of Duty: Modern Warfare",
    precio: 49.99,
    descripcion:
      "Un shooter en primera persona con acción intensa y gráficos realistas.",
    categoria: "Videojuego",
    imagen: "/img/Call of Duty Modern Warfare.jpg",
  },
  {
    id: 9,
    titulo: "Fortnite",
    precio: 0.0,
    descripcion:
      "Un juego de batalla real en el que 100 jugadores luchan por ser el último en pie.",
    categoria: "Videojuego",
    imagen: "/img/Fortnite.jpg",
  },
  {
    id: 10,
    titulo: "Apex Legends",
    precio: 0.0,
    descripcion:
      "Un juego de disparos de héroes con un estilo de Battle Royale.",
    categoria: "Videojuego",
    imagen: "/img/Apex Legends.jpg",
  },
  {
    id: 11,
    titulo: "Among Us",
    precio: 4.99,
    descripcion:
      "Un juego de deducción social donde los jugadores deben encontrar al impostor.",
    categoria: "Videojuego",
    imagen: "/img/Among Us.jpg",
  },
  {
    id: 12,
    titulo: "Animal Crossing: New Horizons",
    precio: 59.99,
    descripcion:
      "Un simulador de vida en el que creas y gestionas tu propia isla.",
    categoria: "Videojuego",
    imagen: "/img/Animal Crossing New Horizons.jpg",
  },
  {
    id: 13,
    titulo: "Dark Souls III",
    precio: 39.99,
    descripcion:
      "Un desafiante juego de rol de acción conocido por su dificultad.",
    categoria: "Videojuego",
    imagen: "/img/Dark Souls III.jpg",
  },
  {
    id: 14,
    titulo: "Hades",
    precio: 24.99,
    descripcion:
      "Un roguelike con elementos de acción y rol ambientado en la mitología griega.",
    categoria: "Videojuego",
    imagen: "/img/Hades.jpg",
  },
  {
    id: 15,
    titulo: "The Last of Us Part II",
    precio: 59.99,
    descripcion:
      "Una secuela de la aclamada historia de supervivencia en un mundo post-apocalíptico.",
    categoria: "Videojuego",
    imagen: "/img/The Last of Us Part II.jpg",
  },
  {
    id: 16,
    titulo: "Final Fantasy VII Remake",
    precio: 59.99,
    descripcion:
      "Un remake del clásico RPG con gráficos modernos y nuevas mecánicas.",
    categoria: "Videojuego",
    imagen: "/img/Final Fantasy VII Remake.jpg",
  },
  {
    id: 17,
    titulo: "Resident Evil Village",
    precio: 59.99,
    descripcion:
      "Una historia de terror y supervivencia en una misteriosa aldea.",
    categoria: "Videojuego",
    imagen: "/img/Resident Evil Village.jpg",
  },
  {
    id: 18,
    titulo: "Ghost of Tsushima",
    precio: 49.99,
    descripcion: "Un juego de acción y aventura ambientado en el Japón feudal.",
    categoria: "Videojuego",
    imagen: "/img/Ghost of Tsushima.jpg",
  },
  {
    id: 19,
    titulo: "FIFA 23",
    precio: 59.99,
    descripcion:
      "El último juego de la serie de fútbol con gráficos mejorados y nuevas características.",
    categoria: "Videojuego",
    imagen: "/img/FIFA 23.jpg",
  },
  {
    id: 20,
    titulo: "Halo Infinite",
    precio: 59.99,
    descripcion:
      "El regreso del Jefe Maestro en un nuevo capítulo de la saga Halo.",
    categoria: "Videojuego",
    imagen: "/img/Halo Infinite.jpg",
  },
  {
    id: 21,
    titulo: "PlayStation 5",
    precio: 499.99,
    descripcion:
      "La PlayStation 5 ofrece una experiencia de juego revolucionaria con gráficos 4K, un SSD ultrarrápido, y un mando DualSense con respuesta háptica.",
    categoria: "Consola de videojuegos",
    imagen: "/img/PlayStation 5.jpg",
  },
  {
    id: 22,
    titulo: "Xbox Series X",
    precio: 499.99,
    descripcion:
      "La Xbox Series X es la consola más potente jamás creada, con capacidad para 4K, tiempos de carga mínimos, y una amplia biblioteca de juegos.",
    categoria: "Consola de videojuegos",
    imagen: "/img/Xbox Series X.jpg",
  },
  {
    id: 23,
    titulo: "Nintendo Switch",
    precio: 299.99,
    descripcion:
      "La Nintendo Switch ofrece flexibilidad única como consola híbrida, permitiendo jugar tanto en casa como en movimiento, con títulos exclusivos como Mario y Zelda.",
    categoria: "Consola de videojuegos",
    imagen: "/img/Nintendo Switch.jpg",
  },
  {
    id: 24,
    titulo: "PlayStation 4",
    precio: 299.99,
    descripcion:
      "La PlayStation 4 sigue siendo una consola popular con una gran variedad de juegos exclusivos y soporte para PlayStation VR.",
    categoria: "Consola de videojuegos",
    imagen: "/img/PlayStation 4.jpg",
  },
  {
    id: 25,
    titulo: "Xbox One S",
    precio: 249.99,
    descripcion:
      "La Xbox One S es una opción económica que permite jugar en 4K y tiene una amplia biblioteca de juegos y aplicaciones de entretenimiento.",
    categoria: "Consola de videojuegos",
    imagen: "/img/Xbox One S.jpg",
  },
];

export default productos;
