import { useContext } from "react"
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../auth"

export const PrivateRouter = ({ children }) => {

    const { logged } = useContext(AuthContext)   
    const { pathname, search } = useLocation();

    const lastpath = pathname + search;
    localStorage.setItem('lastpath', lastpath);
    console.log('re-render');

  return (logged)
    ? children
    : <Navigate to="/login" />
}
