import { useContext, useRef } from "react";
import Header from "../../shared/components/Header/Header";
import styles from "./Adduser.module.css";
import { useNavigate } from "react-router-dom";
import Authcontext from "../../context/Context";
import HeaderDrop from "../../shared/components/Header/HeaderDrop";
import Button from "../../shared/UIElements/Button";
export default function Adduser() {
  const ctx = useContext(Authcontext);
  const navigate = useNavigate();

  const useFname = useRef();
  const useLname = useRef();
  const useAge = useRef();
  const useEmail = useRef();
  const usePhone = useRef();
  const useRole = useRef();
  const usePassword = useRef();
  const useCnfPassword = useRef();

  const formSubmit = async (event) => {
    event.preventDefault();
    const Data = {
      Firstname: useFname.current.value,
      Lastname: useLname.current.value,
      Email: useEmail.current.value,
      Phone: usePhone.current.value,
      Age: useAge.current.value,
      Role: useRole.current.value,
      Password: usePassword.current.value,
      CnfPassword: useCnfPassword.current.value,
    };
    // console.log(Data);
    console.log(ctx.token);
    const response = await fetch("http://localhost:4000/api/admin/add-user", {
      method: "POST",
      body: JSON.stringify(Data),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + ctx.token,
      },
    });
    if (!response.ok) {
      return alert("Invalid add user");
    }
    const responseText = await response.json();

    navigate("/admin/teams");
    alert("Added Successfully");
  };

  return (
    <>
      <Header />
      <section className="section-body">
        <HeaderDrop />
        <form onSubmit={formSubmit} className={styles["form-container"]}>
          <label htmlFor="Firstname">First Name</label>
          <input type="text" name="Firstname" ref={useFname} />

          <label htmlFor="Lastname">Last Name</label>
          <input type="text" name="Lastname" ref={useLname} />

          <label htmlFor="Email">Email</label>
          <input type="email" name="Email" ref={useEmail} />

          <label htmlFor="Password">Create Password</label>
          <input type="password" name="Password" ref={usePassword} />

          <label htmlFor="CnfPassword">Re-type password</label>
          <input type="password" name="CnfPassword" ref={useCnfPassword} />
          <label htmlFor="Phone">Contact</label>
          <input type="number" name="Phone" ref={usePhone} />
          <div className={styles["sub_details"]}>
            <div>
              <label htmlFor="Age">Age</label>
              <br />
              <input type="Number" name="Age" ref={useAge} />
            </div>
            <div>
              <label htmlFor="Role"> Select Role</label>
              <select name="Role" id="" ref={useRole}>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
              </select>
            </div>
          </div>

          <Button>Add</Button>
        </form>
      </section>
    </>
  );
}
