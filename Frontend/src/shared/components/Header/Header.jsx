import React from "react";
import styles from "./Header.module.css";
import Searchheader from "../Searchheader";
import HeaderDrop from "./HeaderDrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faMessage,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <div className={styles["top-header"]}>
        <div className={styles["top-left-header"]}>
          <div className={styles["logo"]}>
            <img src="../logo.png" alt="" />
          </div>
        </div>
        <div className={styles["searchbar-div"]}>
          <FontAwesomeIcon icon={faSliders} />
          <Searchheader />
        </div>

        <div className={styles["top-right-header"]}>
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faMessage} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </>
  );
}
