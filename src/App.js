import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { ItemListContainer } from './components/container/ItemListContainer';
import { Section } from './components/section/Section';
import ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';




function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar/>
      <Section/>

      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      
      
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
