import logo from './logo.svg';
import './App.css';
import Navbar_1 from './Navbar';
import Home from './Home'
import  './css/style.css'
import Home1 from './Home1';
import {Provider} from 'react-redux'
import store from './productstore';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Checkout from './Checkout'
function App() {

  

  return (
    
    <div >
    <BrowserRouter>
    <Navbar_1 />
    <Routes>
      <Route path='/' element={<Home1/>}/>
      <Route path='/Home' element={<Home1/>}/>
      <Route path='/cart' element={<Checkout/>}/>
    </Routes>
    </BrowserRouter> 
    
      {/* <Home /> */}
      {/* <Home1 /> */}
      
    </div>
   
  );
}

export default App;
