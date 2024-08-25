import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import {  FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Gautam Naik.</div>
      <div>
        <Link to={"https://github.com/Gautam0820"} target="_blank">
          <FaGithub />
        </Link>
       
        <Link to={"https://www.linkedin.com/in/gautam-naik-0820gn"} target="_blank">
          <FaLinkedin />
        </Link>
       
      </div>
    </footer>
  );
};

export default Footer;