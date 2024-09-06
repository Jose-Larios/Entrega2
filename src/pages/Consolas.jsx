//Importando Link
import { Link } from "react-router-dom";

//Creacion del componente
function Consolas() {
  return (
    <main>
      <h1>Consolas disponibles</h1>
      <Link to="/donGamer" className="Boton-Volver">
        Home
      </Link>
    </main>
  );
}

export default Consolas;
