import { useState} from "react";


const Contador = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(1);


    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div>
                <button onClick={restarContador}> - </button>
                <strong> {contador} </strong>
                <button onClick={sumarContador}> + </button>
            </div>
            <button onClick={()=> funcionAgregar(contador)}> Agregar al Carrito </button>
        </>

    )
}

export default Contador


