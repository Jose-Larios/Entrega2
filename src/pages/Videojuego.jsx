//Importando useParams
import { Link, useParams } from "react-router-dom";
//Importando la data
import productos from "../data";
//Importamos contador
import Contador from "../components/Contador.jsx";

//Creacion del componete
function Videojuego() {
  const { videojuegoId } = useParams();
  const resultado = productos.find((producto) => producto.id == videojuegoId);

  const { titulo, precio, descripcion, categoria, imagen } = resultado;

  return (
    <div>
      <img src="" alt={imagen} />
      <h2>Titulo: {titulo}</h2>
      <h3>Precio: ${precio}</h3>
      <h5>Categoria: {categoria}</h5>
      <p>Descripcion: {descripcion}</p>
      <Contador />
      <Link to="/donGamer/videojuegos">Volver</Link>
    </div>
  );
}

export default Videojuego;
