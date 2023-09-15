import { useContext } from 'react'
import Authcontext from '../context/Context'
import { Navigate } from 'react-router-dom'

export default function Protected(props) {
    const ctx=useContext(Authcontext)
    if(!ctx.isLoggedIn ){
  return <Navigate to="/login"></Navigate>
    }
    return props.children;
}
