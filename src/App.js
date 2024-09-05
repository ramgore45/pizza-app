import logo from './logo.svg';
import { Navbar } from './Components/common/Navbar';
import { Home } from './Pages/Home';
import { Cart } from './Pages/Cart';
import { LogIn } from './Pages/LogIn';
import { SignUp } from './Pages/SignUp';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './Pages/Menu';
import { Offers } from './Pages/Offers';
import { AboutUs } from './Pages/AboutUs';
import { ContactUs } from './Pages/ContactUs';
import { useSelector } from 'react-redux';

function App() {

  const {cart, totalAmount, totalCount} = useSelector(state=> state.cart)
  console.log(cart, totalAmount, totalCount)

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div>
        <Navbar totalCount={totalCount}/> 
      </div>
      <div className='mx-24 min-h-[calc(100vh-80px)]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/offers' element={<Offers/>} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
