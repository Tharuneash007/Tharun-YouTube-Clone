import React from 'react'
import { Navigate} from 'react-router-dom'
const ProtectedRoutes = () => {
    const auth = localStorage.getItem("loggedin");
  return auth ? <Navigate to={'/home'}/> : <Navigate to={"/login"}/>
}

export default ProtectedRoutes;