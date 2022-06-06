import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const expandSidebar = () => {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main-content").style.width = "250px";
};

const closeSidebar = () => {
  document.getElementById("sidebar").style.width = "75px";
  document.getElementById("main-content").style.width = "75px";
};

export default function Sidebar() {
  return (
    <nav id="sidebar" className="sidebar">
      <div class="box">
        <div class="btn not-active">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div>
        <h3 className="sidebar-header">Contents</h3>
      </div>
      <ul>
        <div className="sidebar-buttons">
          <li>
            <a href="#about">About AlgoStruct </a>
          </li>
          <li>
            <a href="#algorithms">Algorithms</a>
          </li>
          <li>
            <a href="#data-structures">Data Structures</a>
          </li>
          <li>
            <a href="#learning">Learning</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </div>
      </ul>
      <hr className="sidebar-social-links-hr" />
      <div className="sidebar-social-links">
        <Link to="https://www.facebook.com">
          <FaIcons.FaFacebook className="facebook-icon" />
        </Link>
        <Link to="https://www.github.com">
          <FaIcons.FaGithub className="github-icon" />
        </Link>
        <Link to="https://www.twitter.com">
          <FaIcons.FaTwitter className="twitter-icon" />
        </Link>
        <Link to="https://www.linkedin.com">
          <FaIcons.FaLinkedin className="linkedin-icon" />
        </Link>
        <Link to="https://www.instagram.com">
          <FaIcons.FaInstagram className="instagram-icon" />
        </Link>
      </div>
    </nav>
  );
}
