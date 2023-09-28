import { useNavigate } from "react-router-dom";
import styles from "./HeaderDrop.module.css";
import { useContext } from "react";
import Authcontext from "../../../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleRoof,
  faGrip,
  faBuilding,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function HeaderDrop(props) {
  const navigate = useNavigate();
  const ctx = useContext(Authcontext);

  return (
    <div className={styles["dropdown_main"]}>
      <ul className={styles["icons-menu"]}>
        <li>
          <FontAwesomeIcon icon={faGrip} />
        </li>
        <li>
          <FontAwesomeIcon icon={faBuilding} />
        </li>
        <li>
          <FontAwesomeIcon icon={faPeopleRoof} />
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} />
        </li>
      </ul>
      <ul className={styles["text-menu"]}>
        <li>Overview</li>
        <li onClick={() => navigate("/admin/department")}>Departments</li>
        <li onClick={() => navigate("/admin/teams")}>Managers</li>
        <li onClick={() => navigate("/admin/add-user")}>Employees</li>
      </ul>
    </div>
  );
}
