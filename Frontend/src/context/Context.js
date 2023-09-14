import { createContext } from "react";

const Authcontext=createContext({
    token:"",
    isLoggedIn:false,
    loginHandler:()=>{},
    logoutHandler:()=>{}

})
export default Authcontext