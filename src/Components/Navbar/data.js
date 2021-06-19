import React from "react";
import "./style.css";
import * as FaIcons from "react-icons/fa";
import * as TiIcons from "react-icons/ti";
import * as RiIcons from "react-icons/ri";
import * as GoIcons from "react-icons/go";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <BiIcons.BiHome />,
    cName: "nav-text",
  },
  {
    title: "Our Categories",
    path: "/our-categories",
    icon: <TiIcons.TiThListOutline />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaBoxes />,
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/about",
    icon: <FaIcons.FaBook />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <RiIcons.RiContactsFill />,
    cName: "nav-text",
  },
  {
    title: "Catalogue",
    path: "/catalogue",
    icon: <GoIcons.GoBook />,
    cName: "nav-text",
  },
];
