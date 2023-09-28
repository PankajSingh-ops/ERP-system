import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Authcontext from "../../context/Context";
import styles from "./Signin.module.css";
import Button from "../../shared/UIElements/Button";

export default function Signin() {
  const useEmail = useRef();
  const usePassword = useRef();
  const navigate = useNavigate();
  const ctx = useContext(Authcontext);
  const loginSubmit = async (event) => {
    event.preventDefault();
    const data = {
      Email: useEmail.current.value,
      Password: usePassword.current.value,
    };
    // console.log(data);

    const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(response);
    if (response) {
      const incoming = await response.json();
      let token = incoming.token;
      let role = incoming.role;
      // console.log(token,role);
      ctx.loginHandler(token, role);
      navigate("/");
    } else {
      alert("Not working");
    }
  };
  return (
    <>
      <div className={styles["login-form-container"]}>
        <div className={styles["login-container"]}>
          <div className={styles["logo-div"]}>
            <img src="../logo.png" alt="" />
          </div>
          <form onSubmit={loginSubmit}>
            <label htmlFor="Email">Enter e-mail id</label>
            <input type="email" name="Email" ref={useEmail} />
            <label htmlFor="Password">Enter your password</label>
            <input type="password" name="Password" ref={usePassword} />
            <Button onClick={Signin}>Sign In</Button>
          </form>
        </div>
      </div>
    </>
  );
}
