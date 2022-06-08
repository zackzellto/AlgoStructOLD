import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";

export default function SidebarExpanded() {
  return (
    <>
      <nav id="sidebar" className="sidebar">
        <div className="menu-btn">
          <div className="menu-btn__burger" />
        </div>
        <div>
          <h3 className="sidebar-header">AlgoStruct</h3>
        </div>
        <ul>
          <div className="sidebar-buttons">
            <li>
              <a href="#about">
                <FaIcons.FaQuestion className="about-icon" />
                About AlgoStruct{" "}
              </a>
            </li>
            <li>
              <a href="#algorithms">
                <FaIcons.FaBrain className="algorithms-icon" />
                Algorithms
              </a>
            </li>
            <li>
              <a href="#data-structures">
                <FaIcons.FaDatabase className="data-structures-icon" />
                Data Structures
              </a>
            </li>
            <li>
              <a href="#learning">
                <FaIcons.FaBookOpen className="learning-icon" />
                Learning
              </a>
            </li>
            <li>
              <a href="contact">
                <FaIcons.FaEnvelopeOpen className="contact-icon" />
                Contact
              </a>
            </li>
          </div>
        </ul>
        <div className="sidebar-account">
          <FaIcons.FaUserNinja className="account-icon" />
          <h4>Account</h4>
          <div className="account-text">
            <ul>
              <li>
                <Link to="/login">
                  <FaIcons.FaArrowRight /> Login
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <FaIcons.FaRegIdCard /> Register
                </Link>
              </li>
            </ul>
          </div>

          <Image
            className="sidebar-account-avatar"
            style={{ display: "none" }}
          ></Image>
        </div>
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
    </>
  );
}