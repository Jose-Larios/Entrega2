//Importando el componente Outlet
import { Outlet } from "react-router-dom";
//Importando NavBar
import NavBar from "../components/Navbar";

//Creacion del componente
function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <footer>
        <p>Siguenos en nuestras redes</p>
      </footer>
    </div>
  );
}

export default Layout;
