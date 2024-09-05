import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    signupData:null,
    users:[],
    // token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
    loading: false
}

const authSlice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers:{
        setSignupData(state, action) {
            state.signupData = action.payload;
            state.users.push(state.signupData)
        },
        // setToken(state,action){
        //     state.token = action.payload
        // },
        setLoading(state,action){
            state.loading = action.payload
        }
    }
})

export const {setToken, setLoading, setSignupData} = authSlice.actions
export default authSlice.reducer