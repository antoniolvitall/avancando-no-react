import { useState } from "react";

const CondicionalRender = () => {
const [x] = useState(true);

const [name, setName] = useState("Ricardo")

  return (
    <div>
        <h1>Isso sera exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x e falso!</p>}
        <h1>If ternario</h1>
        {name === "Antonio" ? (
          <div>
            <p>O nome e Antonio</p>
          </div>
        ) : (
          <div>
            <p>Nome nao encontrado!</p>
          </div>
        )}
        <button onClick={() => setName("Antonio") }>Clique aqui!</button>
    </div>
  );
};

export default CondicionalRender;