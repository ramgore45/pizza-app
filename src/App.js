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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchAllPizzaDetails } from './operations/pizzaFunctions';
import toast from 'react-hot-toast';
import { apiConnector } from './operations/apiconnector';
import { pizzaEndpoints } from './operations/api';
import { MyOrdersPage } from './Pages/MyOrdersPage';
import { AllOrdersPage } from './Pages/AllOrdersPage';
import { Error } from './Pages/Error';
import { SingleOrder } from './Components/ordersFolder/SingleOrder';

const {GET_PIZZA_URL} = pizzaEndpoints

function App() {

  const {cart, totalAmount, totalCount} = useSelector(state=> state.cart)
  const {user} = useSelector(state=> state.auth)
  console.log(cart, totalAmount, totalCount)
  const dispatch = useDispatch()

  const [pizzaData, setPizzaData] = useState([])
  console.log(pizzaData)

  useEffect(()=>{
      // fetchAllPizzaDetails()
      const getAllPizzaData = async()=>{
        try{
          const response = await apiConnector("GET", GET_PIZZA_URL)
          console.log(response.data.data)
          setPizzaData(response.data.data)
          toast.success("Successfully fetch all details")
        }catch(error){
            console.log(error)
            throw Error(error)
        }
      }
      getAllPizzaData()
  },[])


  return (
    <div className='bg-gray-100 min-h-screen'>
      <div>
        <Navbar totalCount={totalCount}/> 
      </div>
      <div className='mx-24 min-h-[calc(100vh-80px)]'>
        <Routes>
          <Route path='/' element={<Home pizzaData={pizzaData}/>} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path='/signup' element={<SignUp/>} />
         
          { user!==null &&  user.accountType === "Customer" &&
            <>
              <Route path='/myorders' element={<MyOrdersPage/>} />
              <Route path='/myorders/:orderId' element={<SingleOrder/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/menu' element={<Menu pizzaData={pizzaData}/>} />
              <Route path='/offers' element={<Offers/>} />
            </>
          }
          { user!==null && user.accountType === "Admin" &&
            <>
              <Route path='/allorders' element={<AllOrdersPage/>} />
            </>
          }

          <Route path="*" element={<Error/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
