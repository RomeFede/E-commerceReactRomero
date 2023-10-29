import { useState, useEffect } from "react";
import './Counter.css';

const Contador = () => {
    const [contador, setContador] = useState(1);

    useEffect(()=> {
        document.title = `Contador: ${contador} `;

    }, [contador])


    const sumarContador = () => {
        setContador(contador + 1);
    }

    const restarContador = () => {
        setContador(contador - 1);
    }

  return (
    <div>
        <button onClick={restarContador}> - </button>
        <strong> {contador} </strong>
        <button onClick={sumarContador}> + </button>
        <button>Agregar al carrito</button>

    </div>
  )
}

export default Contador