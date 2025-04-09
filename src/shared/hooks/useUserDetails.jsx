import { useState } from "react";
import { logout as logoutHandler } from "./useLogout";
 
const getUserDetails = ()=>{
 
    const userDetails = localStorage.getItem('user') // Se trae toda la info de user que esta en el localStorage
 
    if (userDetails) {
        return JSON.parse(userDetails)
    }else{
        return null
    }
}
 
export const useUserDetails = ()=>{
    const [userDetails, setUserDetails] = useState(getUserDetails())
 
    const logout = ()=>{
        logoutHandler()
    }

    return {
        isLogged: Boolean(userDetails),
        username: userDetails?.username ? userDetails.username : 'guest', 
        logout
    }
 
}