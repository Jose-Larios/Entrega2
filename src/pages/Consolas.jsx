//Importando Link
import { Link } from "react-router-dom";
//Importando la data
import productos from "../data.js";
//Importando el Css

//Creacion del componente
function Consolas() {
  //Fltrando array
  const consolas = productos.filter(
    (producto) => producto.categoria === "Consola de videojuegos"
  );

  return (
    <main>
      <h1>Consola de videojuegos disponibles</h1>
      <div className="cart">
        {/* Mapeando el arreglo */}
        {consolas.map((producto) => {
          return (
            <article key={producto.id}>
              <h4>{producto.titulo}</h4>
              <img src={producto.imagen} alt={producto.titulo} />
              <Link to={`${producto.id}`}>Mas informacion</Link>
            </article>
          );
        })}
      </div>
      <Link to="/">Home</Link>
    </main>
  );
}

export default Consolas;
