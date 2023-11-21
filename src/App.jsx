import './App.css';
import ItemListContainer from './assets/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './assets/ItemDetailContainer/ItemDetailContainer';
import NavBar from './assets/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './assets/Cart/Cart';
import Checkout from './assets/Checkout/Checkout';





const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='*' element={<h2>Sitio En Construcción </h2>} />
          </Routes>
          
        </CarritoProvider>
      </BrowserRouter>

    </>
  )
}

export default App