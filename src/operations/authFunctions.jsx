import toast from "react-hot-toast"
import { apiConnector } from "./apiconnector"
import { authEndpoints } from "./api"
import { setToken, setUser } from "../reducer/slices/authSlice"
import { emptyCart } from "../reducer/slices/cartSlice"

const URL = process.env.REACT_APP_BASE_URL

const {LOGIN_URL ,SIGNUP_URL} = authEndpoints

export async function login (email, password, navigate, dispatch){
    try{
        // check the details
        console.log(email, password)
        if(!email || !password){
            return toast.error("please fill all the details")
        }
        // check user is present in users array
        console.log(URL)
        console.log(LOGIN_URL)
        const response = await apiConnector("POST", LOGIN_URL , {
            email, password
        } )

        console.log(response)
        if(!response.data.success){
            throw new Error(response.data.message)
        }

        dispatch(setUser(response.data.user))
        dispatch(setToken(response.data.token))
        toast.success(response.data.message)

        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("user", JSON.stringify(response.data.user))
        navigate("/")

    }catch(error){
        console.log(error)
        toast.error('Unexpected error occurs during Login, LogIn Failed')
    }
}

export async function signUp (name, email, password, confirmPassword, navigate, dispatch){
    try{
        // check the fields are fills
        if(!name || !email || !password || !confirmPassword){
            return toast.error("please fill all the details")
        }

        if (password !== confirmPassword) {
            toast.error("Passwords Do Not Match")
            return
        }
        // check user is already exist
        const response = await apiConnector("POST", SIGNUP_URL , {
            name, email, password, confirmPassword
        } )

        console.log(response)
        if(!response.data.success){
            throw new Error(response.data.message)
        }
        
        navigate('/login')
        toast.success(response.data.message)

    }catch(error){
        console.log(error)
        toast.error('Unexpected error occurs during SignUp, SignUp Failed')
    }
}


export async function logout(navigate,dispatch) {
   try{
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        dispatch(setToken(null))
        dispatch(setUser(null))
        dispatch(emptyCart())
        toast.success("Logged Out")
        navigate("/")
      
   }
   catch(error){
    console.log(error)
    toast.error("Log out failed, please try again")
   }
  }