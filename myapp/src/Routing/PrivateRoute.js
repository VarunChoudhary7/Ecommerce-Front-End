import { useSelector } from "react-redux";
import { Navigate } from "react-router";


const PrivateRoute = ({ child }) => {
    // const auth = useSelector(state=>state.auth)
    const { token } = useSelector(state => state.auth)
    // return auth.token != null ? <Navigate to="/" /> : (
    return token === null ? child : <Navigate to="/" />
}

export default PrivateRoute;