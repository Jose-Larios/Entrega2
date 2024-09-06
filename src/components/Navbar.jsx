//Importamos Link
import { Link } from "react-router-dom";

//Creacion del componente
const NavBar = () => {
  return (
    <nav>
      <Link to="/donGamer">Home</Link>
      <Link to="/donGamer/consolas">Consolas</Link>
      <Link to="/donGamer/figuras">Figuras</Link>
      <Link to="/donGamer/videojuegos">Videojuegos</Link>
    </nav>
  );
};

export default NavBar;
