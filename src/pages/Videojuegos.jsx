//Importando Link
import { Link } from "react-router-dom";
//Importando la data
import productos from "../data.js";
//Importando el Css
import "./Videojuegos.css";

//Creacion del componente
function Videojuegos() {
  return (
    <main>
      <h1>Videojuegos disponibles</h1>
      <div className="cart">
        {/* Mapeando el arreglo */}
        {productos.map((producto) => {
          return (
            <article key={producto.id}>
              <h4>{producto.titulo}</h4>
              <img src="" alt={producto.imagen} />
              <Link to={`${producto.id}`}>Mas informacion</Link>
            </article>
          );
        })}
      </div>
      <Link to="/donGamer">Home</Link>
    </main>
  );
}

export default Videojuegos;
