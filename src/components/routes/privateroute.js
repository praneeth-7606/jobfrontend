import {useState,useEffect} from "react"
import { useAuth } from "../context/auth"
import { Outlet } from "react-router-dom"
import axios from "axios"
import Spinner from "../spinner"
export default function PrivateRoute(){
    const[ok,setok]=useState(false)
    const {auth,setauth,userId}=useAuth()


    useEffect(()=>{
        const authcheck=async()=>{
            const res= await axios.get("https://jobserver-1.onrender.com/api/route/auth/user-auth")
            if(res.data.ok){
                setok(true)
                // /api/vi/auth/login
            }
            else{
                setok(false)
            }
        };
        if(auth?.token) authcheck();

    },[auth?.token])
    return ok? <Outlet/>:<Spinner/>
}