//Importando BrowserRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Importando las paginas
import Consolas from "./pages/Consolas";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Videojuegos from "./pages/Videojuegos";
import Videojuego from "./pages/Videojuego";
//Impotando Css
import "./App.css";
import Layout from "./pages/Layout";
import Consola from "./pages/Consola";

//Creacion del componente
function App() {
  return (
    //Router
    <BrowserRouter>
      {/* Contenedor de las rutas */}
      <Routes>
        {/* Rutas */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="consolas" element={<Consolas />} />
          <Route path="videojuegos" element={<Videojuegos />} />
          <Route path="*" element={<Error />} />
          {/* Parametro por URL */}
          <Route path="/:videojuegoId" element={<Videojuego />} />
          <Route path="/:consolaId" element={<Consola />} />
          <Route path="videojuegos/:videojuegoId" element={<Videojuego />} />
          <Route path="consolas/:consolaId" element={<Consola />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
