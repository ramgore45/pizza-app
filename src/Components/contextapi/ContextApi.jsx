
import React, {  useState } from 'react'
import { createContext } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router'

export const AppContext = createContext()

export const AppContextProvider = ({children}) => {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])
    const [logIn, setLogIn] = useState(false)
    const [profile, setProfile] = useState({})

    const [formData, setFormData] = useState({
        name:"", email:"" , password:"", confirmPassword:"", contact:"", address:""
    })

    const {name ,email, password, confirmPassword, contact, address} = formData

    const changeHandler = (e) => {
        e.preventDefault()
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }))
    }

    function handleOnSubmit( signUpPage) {
        if(signUpPage){
            // check the fields are fills
            if(!name || !email || !password || !confirmPassword){
                return toast.error("please fill all the details")
            }
            // check user is already exist
            const isUserPresent = users.some((user)=> user.email=== email)
            if(isUserPresent){
                toast.error('User is already present with this email, please try to log in')
                navigate('/login')
                setFormData({
                    name:"", email:"" , password:"", confirmPassword:""
                })
                return
            }
            // check password is same or not
            if(password !== confirmPassword){
                return toast.error("password and confirm password should be same")
            }
            // set users data in users array
            setUsers((prev)=>(
                [...prev, formData]
            ))
            navigate('/login')
            toast.success("Account is signup, now login to continue")
            // empty the form
            setFormData({
                name:"", email:"" , password:"", confirmPassword:""
            })

        }else{
            // check the details
            if(!email || !password){
                return toast.error("please fill all the details")
            }
            // check user is present in users array
            const isUserPresent = users.some((user)=> user.email=== email)
            if(isUserPresent){
                const user = users.find((user)=> user.email === email)
                if(user.password!==password){
                    return toast.error("password is wrong")
                }
                setLogIn(true)
                setProfile(user)
                navigate('/cart')
                toast.success("Login succefully")
                setFormData({
                    name:"", email:"" , password:"", confirmPassword:""
                })
                return
            }else{
                toast.error("user is not exist, please sign up first")
                navigate('/signup')
                return
            }
        }
    }


    const value = {
        formData,setFormData,
        logIn, setLogIn,
        profile, setProfile,
        users, setUsers,
        changeHandler,
        handleOnSubmit,
    }

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}