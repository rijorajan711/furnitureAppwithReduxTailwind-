import './App.css';
import { Routes,Route } from 'react-router-dom';
import Footer from './Component/Footer';
import Headerr from './Component/Headerr';
import Homemain from './Component/Homemain';
function App() {
  return (
    <div className="App">
     
     
      <Headerr />

        <Routes>
          
        <Route path='/'  element={<Homemain/>}></Route>

        </Routes> 
    
      <Footer />
      
    </div>
  );
}

export default App;
