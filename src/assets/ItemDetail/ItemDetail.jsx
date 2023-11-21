import { useState } from 'react';
import Counter from "../Contador/Contador";
import { Link } from 'react-router-dom';
import './ItemDetail.css'
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';


const ItemDetail = ({id, nombre, stock, precio, img, descripcion }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

   const {agregarAlCarrito} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
    
    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad);
  }


  return (
    <div className='contenedorItem'>
        <h2>{nombre} </h2>
        <h3>Precio: ${precio} </h3>
        <h3>stock: {stock}</h3>
        <img src={img} alt={nombre} />
        <p>{descripcion}</p>
    

    {
      agregarCantidad > 0 ? <button> <Link to="/cart">Terminar compra</Link> </button> : (<Counter incial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
    }

    </div>
  )
}

export default ItemDetail