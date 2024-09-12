//Importando useParams
import { useParams } from "react-router-dom";
//Importando la data
import productos from "../data";
//Importamos contador
import Contador from "../components/Contador.jsx";
//Importando Css

//Creacion del componete
function Consola() {
  const { consolaId } = useParams();
  const resultado = productos.find((producto) => producto.id == consolaId);

  const { titulo, precio, descripcion, imagen } = resultado;

  return (
    <div id="cartJuegos">
      <img src={imagen} alt={titulo} />
      <h2>Titulo: {titulo}</h2>
      <h3>Precio: ${precio}</h3>
      <p>Descripcion: {descripcion}</p>
      <Contador />
    </div>
  );
}

export default Consola;
