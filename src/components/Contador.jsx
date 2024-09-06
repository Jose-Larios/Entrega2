//Importamos useState
import React, { useState } from "react";

//Creamos el componente
const Contador = () => {
  //Se almacena el valor del contador
  const [count, setCount] = useState(0);
  //Aumentar contador
  const aumentar = () => setCount(count + 1);
  //Disminuir contador
  const disminuir = () => setCount(count - 1);

  return (
    <div>
      <h5>Contador: {count}</h5>
      <button onClick={disminuir}>-</button>
      <button onClick={aumentar}>+</button>
      <button>Comprar</button>
    </div>
  );
};

export default Contador;
