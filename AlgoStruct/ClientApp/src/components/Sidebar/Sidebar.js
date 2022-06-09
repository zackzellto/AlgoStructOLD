import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Sidebar.scss";
import SidebarExpanded from "./SidebarCollapsed";
import SidebarCollapsed from "./SidebarExpanded";

const collapseExpandButton = () => {
  const menuBtn = document.querySelector(".menu-btn");
  let menuOpen = false;
  document.getElementById("sidebar").style.width = "75px";
  menuBtn.addEventListener("click", (e) => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      document.getElementById("sidebar").style.width = "250px";
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      document.getElementById("sidebar").style.width = "75px";
      menuOpen = false;
    }
  });
};

window.onload = collapseExpandButton;

export default function Sidebar() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <div onClick={() => setIsToggled(!isToggled)}></div>
      {isToggled ? <SidebarCollapsed /> : <SidebarExpanded />}
    </>
  );
}
