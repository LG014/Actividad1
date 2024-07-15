import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Games, CheckOut, Cart, Purchase } from "./components/pages/index.js"
import { ShopContextProvider } from "./context/shop-context.jsx"

function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Games />}/>
        <Route path='/games' element={<Games />}/>
        <Route path='/checkout' element={<CheckOut />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/history' element={<Purchase />}/>
      </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
