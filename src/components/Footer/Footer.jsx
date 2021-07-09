import React from "react";
import styles from "./Footer.module.css";
import { IoLogoGithub, IoLogoLinkedin, IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/palakgupta2712" target="_blank">
        <IoLogoGithub style={{ color: "white" }} />
      </a>
      <a href="https://www.linkedin.com/in/palakgupta2712/" target="_blank">
        <IoLogoLinkedin style={{ color: "white" }} />
      </a>
      <IoIosLink style={{ color: "white" }} />
    </div>
  );
}

export default Footer;
