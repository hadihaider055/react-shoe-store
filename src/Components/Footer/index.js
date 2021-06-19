import React from "react";
import { FooterData } from "./Footer Data";
import * as CgIcons from "react-icons/cg";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="useful-links-panel">
          {FooterData.map((item, index) => (
            <div className="page-link" key={index}>
              <Link to={item.path}>
                <p>{item.title}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="icons-main-div">
          <div className="icons-div">
            <a href="https://www.facebook.com/" target="_blank">
              <CgIcons.CgFacebook className="icon" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <AiIcons.AiOutlineInstagram className="icon" />
            </a>
            <a href="#">
              <FiIcons.FiMail className="icon" />
            </a>
          </div>
        </div>
        <div className="copyright-div">
          <p>
            Copyright &copy; by <span>Paired Perfect Shoes</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
