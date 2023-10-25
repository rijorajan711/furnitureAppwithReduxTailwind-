import './App.css';
import { Routes,Route } from 'react-router-dom';
import Footer from './Component/Footer';
import Headerr from './Component/Headerr';
import Homemain from './Component/Homemain';
import Cart from './Component/Cart';
import Shopenow from './Component/Shopenow';
import Wishlist from './Component/Wishlist';
import Checkout from './Component/Checkout';

function App() {
  return (
    <div className="App">
     
     
      <Headerr />

        <Routes>
         <Route path='/'  element={<Homemain/>}></Route>
         <Route path='/cart' element={<Cart />}></Route>
         <Route path="/wishlist" element={<Wishlist />} />
         <Route path='/shopenow' element={<Shopenow/ >}></Route>
         <Route path='/checkout/:price' element={<Checkout/>}></Route>
        </Routes> 
       <Footer />
    
      
    </div>
  );
}

export default App;
