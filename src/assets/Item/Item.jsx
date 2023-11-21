
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img, stock}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>{nombre} </h3>
        <h4>stock:{stock}</h4>
        <p>Precio: ${precio} </p>
        
        <button><Link to={`/item/${id}`}> Ver Detalles </Link></button>
        
    </div>
  )
}

export default Item