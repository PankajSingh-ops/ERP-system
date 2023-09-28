import { useEffect, useState } from "react";
import styles from "./Teams.module.css";
import Header from "../../shared/components/Header/Header";
import { useNavigate } from "react-router-dom";
import HeaderDrop from "../../shared/components/Header/HeaderDrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Teams() {
  const [products, setTeam] = useState([]);
  const [qwerty, setQwert] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const teamsFunction = async () => {
      const response = await fetch("http://localhost:4000/api/admin/teams");
      if (!response.ok) {
        alert("Not full fill");
      }
      const responseText = await response.json();
      // console.log(responseText.data);
      setTeam(responseText.data);
    };
    teamsFunction();
  }, [qwerty]);
  const deleteFunction = async (id) => {
    console.log(id);
    const response = await fetch(
      `http://localhost:4000/api/admin/delete/${id}`
    );

    console.log(response);
    if (!response.ok) {
      alert("Not deleted something wrong");
    }
    const responseText = await response.json();
    setQwert("yo");
    navigate("/admin/teams");
    alert(responseText.message);
  };
  const editFunction = async (id) => {
    navigate(`/admin/update/${id}`);
  };
  return (
    <>
      <Header />
      <section className="section-body">
        <HeaderDrop />
        <div className={styles.main_table}>
          <table>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Role</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>

            {products.map((p) => {
              return (
                <tr>
                  <td>{p.Firstname}</td>
                  <td>{p.Lastname}</td>
                  <td>{p.Age}</td>
                  <td>{p.Email}</td>
                  <td>{p.Phone}</td>
                  <td>{p.Role}</td>
                  <td>
                    <FontAwesomeIcon icon={faEdit} />
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faTrash} />
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </section>
    </>
  );
}
