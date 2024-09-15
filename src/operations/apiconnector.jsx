import axios from "axios"
import toast from "react-hot-toast"

export const axiosInstances = axios.create({})

export const apiConnector= async (method, url, data, headers, params)=>{
    console.log(method, url )
    try{
        return axiosInstances({
            method: `${method}`,
            url: `${url}`,
            data: data ? data : null,
            headers: headers ? headers : null,
            params: params ? params : null
        })
    }catch(error){
        toast.error("API request failed")
        console.log(error)
        throw error
    }
        
}