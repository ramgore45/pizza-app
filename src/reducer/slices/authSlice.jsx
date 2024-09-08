import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    signupData:null,
    user:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
    loading: false
}

const authSlice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers:{
        setSignupData(state, action) {
            state.signupData = action.payload;
            // state.user.push(state.signupData)
        },
        // setLogIn(state, action){
        //     // check user is present in users array
        //     const data = action.payload
        //     const isUserPresent = users.some((user)=> user.email=== data.email)
        //     if(isUserPresent){
        //         const user = users.find((user)=> user.email === data.email)
        //         if(user.password!==password){
        //             return toast.error("password is wrong")
        //         }
        //         state.logIn = true
        //         setProfile(user)
        //     }else{
        //         return toast.error("user is not exist, please sign up first")
        //     }
        // }
        setToken(state,action){
            state.token = action.payload
        },
        setUser(state,action){
            state.user = action.payload
        },
        setLoading(state,action){
            state.loading = action.payload
        }
    }
})

export const {setToken, setUser, setLoading, setSignupData} = authSlice.actions
export default authSlice.reducer