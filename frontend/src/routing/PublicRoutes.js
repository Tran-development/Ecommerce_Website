import { Navigate } from "react-router-dom";

export const PublicRoutes = ({ children }) => {
    const getTokenFromLocalStorage = localStorage.getItem("token")
    return getTokenFromLocalStorage === null ? children : (<Navigate to='/' replace={true}/>)
}