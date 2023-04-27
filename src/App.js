import './App.css';
import Technology from './Pages/Technology';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom"
import Product from './Pages/Product';
import Home from './Components/Home';
import Contact from './Pages/Contact';
import ProductDeatiles from './Pages/ProductDeatiles';
import Html from './Pages/Html';
import Css from "./Pages/Css"
import Javascript from "./Pages/Javascript"
import Reactjs from "./Pages/Reactjs"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path='/Home' element={<Home/>} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Technology' element={<Technology/>}>
        <Route path='Html' element={<Html/>}/>
        <Route path='Css' element={<Css/>}/>
        <Route path='Javascript' element={<Javascript/>}/>
        <Route path='Reactjs' element={<Reactjs/>}/>

        
        </Route>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/ProductDeatiles/:id' element={<ProductDeatiles/>}/>
        

      </Routes>
    

    </>
  );
}

export default App;
