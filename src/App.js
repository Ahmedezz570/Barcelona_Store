import Navbar from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer';
import Shop from './Pages/Shop';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import './App.css';
import { HashRouter , Routes , Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Shop/>}/>
             {/* <Route path='/mens' element = {<ShopCategory banner = {Men_Banner} category = "men"/>}/>
             <Route path='/womens' element = {<ShopCategory banner = {Women_Banner} category = "women"/>}/>
             <Route path='/kids' element = {<ShopCategory banner = {Kids_Banner} category = "kid"/>}/>
             <Route path='/product' element = {<Product />}>
            <Route path=':productId' element = {<Product />}/>
        </Route> */}
        
            <Route path='/cart' element = {<Cart/>}/>
            <Route path='/login' element = {<LoginSignup/>}/>
       </Routes>
      <Footer />
 </HashRouter>
    </div>
  );
}

export default App;
