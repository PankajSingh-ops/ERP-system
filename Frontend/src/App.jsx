import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Adduser from "./admin/pages/Adduser";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./user/Home";
import Teams from "./admin/pages/Teams";
import Profile from "./user/Profile";
import Edituser from "./admin/pages/Edituser";
import Signin from "./auth/pages/Signin";
import Authcontext from "./context/Context";
import Protected from "./util/Protected";
import Department from "./admin/pages/Department";

export default function App() {
  const [isLoggedIn, setIsLoggesIn] = useState(false);
  useEffect(() => {}, []);
  const loginHandler = (token, role) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    setIsLoggesIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggesIn(false);
  };
  const token = useMemo(() => {
    return localStorage.getItem("token");
  }, [isLoggedIn]);
  const role = useMemo(() => {
    return localStorage.getItem("role");
  }, [isLoggedIn]);

  return (
    <Authcontext.Provider
      value={{ token, role, isLoggedIn: !!token, loginHandler, logoutHandler }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />

          {/* Admin router  */}
          <Route
            path="/admin/add-user"
            element={
              <Protected>
                <Adduser />
              </Protected>
            }
          />
          <Route path="/admin/teams" element={<Teams />} />
          <Route path="/admin/update/:id" element={<Edituser />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/admin/department"
            element={
              <Protected>
                {" "}
                <Department />{" "}
              </Protected>
            }
          />

          {/* Auth routes  */}
          <Route path="/login" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </Authcontext.Provider>
  );
}
