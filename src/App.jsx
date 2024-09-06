//Importando BrowserRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Importando las paginas
import Consolas from "./pages/Consolas";
import Figuras from "./pages/Figuras";
import Home from "./pages/Home";
import Videojuegos from "./pages/Videojuegos";
import Videojuego from "./pages/Videojuego";
//Impotando Css
import "./App.css";
import Layout from "./pages/Layout";

//Creacion del componente
function App() {
  return (
    //Router
    <BrowserRouter>
      {/* Contenedor de las rutas */}
      <Routes>
        {/* Rutas */}
        <Route path="/donGamer" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="consolas" element={<Consolas />} />
          <Route path="figuras" element={<Figuras />} />
          <Route path="videojuegos" element={<Videojuegos />} />
          <Route path="*" element={<Error />} />
          {/* Parametro por URL */}
          <Route path="videojuegos/:videojuegoId" element={<Videojuego />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
