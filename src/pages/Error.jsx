//Importando Link
import { Link } from "react-router-dom";

//Creacion del componente
function Error() {
  return (
    <main>
      <h1>404</h1>
      <p>Pagina no encontrada</p>
      <Link to="/" className="Boton-Volver">
        Home
      </Link>
    </main>
  );
}

export default Error;
