import { createContext } from "react";

const Authcontext=createContext({
    token:"",
    role:"",
    isLoggedIn:false,
    loginHandler:()=>{},
    logoutHandler:()=>{}

})
export default Authcontext