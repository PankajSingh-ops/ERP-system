import { createContext } from "react";

const Authcontext=createContext({
    token:"",
    role:"",
    id:"",
    isLoggedIn:false,
    loginHandler:()=>{},
    logoutHandler:()=>{}

})
export default Authcontext