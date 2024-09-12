//Importamos Link
import { Link } from "react-router-dom";

//Creacion del componente
const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/consolas">Consolas</Link>
      <Link to="/videojuegos">Videojuegos</Link>
    </nav>
  );
};

export default NavBar;
