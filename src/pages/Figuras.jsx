//Importando Link
import { Link } from "react-router-dom";

//Creacion del componente
function Figuras() {
  return (
    <main>
      <h1>Figuras disponibles</h1>
      <Link to="/donGamer">Home</Link>
    </main>
  );
}

export default Figuras;
