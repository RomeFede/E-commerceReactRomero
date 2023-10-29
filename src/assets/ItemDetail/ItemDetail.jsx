import './ItemDetail.css'
import Counter from "../Counter/Counter";


const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias numquam hic molestiae laudantium non provident maxime magni debitis sapiente! Pariatur illum tempore excepturi asperiores, officiis magnam ex placeat quibusdam necessitatibus?</p>
    <Counter></Counter>
    </div>
  )
}

export default ItemDetail