//Importando Link
import { Link } from "react-router-dom";
//Importando la data
import productos from "../data.js";

//Creacion del componente
function Home() {
  return (
    <main>
      <h1>Bienvenido a Don Gamer</h1>
      <h2>Estos son todos nuestros productos a la venta</h2>
      <div className="cart">
        {/* Mapeando el arreglo */}
        {productos.map((producto) => {
          return (
            <article key={producto.id}>
              <h4>{producto.titulo}</h4>
              <img src={producto.imagen} alt={producto.titulo} />
              <Link to={`${producto.id}`}>Mas informacion</Link>
            </article>
          );
        })}
      </div>
    </main>
  );
}

export default Home;
