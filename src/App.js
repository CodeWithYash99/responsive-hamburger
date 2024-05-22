import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaHeart } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi";
import { MdLocalShipping } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";

import "./App.css";

const tabItems = [
  { id: 1, title: "Home", icon: <AiFillHome />, path: "/home", count: "" },
  {
    id: 2,
    title: "Wishlist",
    icon: <FaHeart />,
    path: "/wish-list",
    count: "",
  },
  { id: 3, title: "Cart", icon: <HiShoppingCart />, path: "/cart", count: 0 },
  {
    id: 4,
    title: "Orders",
    icon: <MdLocalShipping />,
    path: "/orders",
    count: "",
  },
  {
    id: 5,
    title: "Contacts",
    icon: <RiContactsBook2Fill />,
    path: "/contacts",
    count: "",
  },
];

const App = () => {
  return (
    <nav className="navbar-bg-container flex flex-row justify-between items-center">
      <h1 className="logo">LOGO</h1>

      <div className="input-container flex flex-row justify-around items-center">
        <input
          type="text"
          placeholder="Search here..."
          className="search-input"
        />
        <button className="search-btn">Search</button>
      </div>

      <div className="small-menu-container flex flex-row justify-center items-center">
        <input className="menu-check-box" type="checkbox" id="hamburger" />
        <label className="hamburger-icon" for="hamburger">
          <GiHamburgerMenu />
        </label>

        <div className="small-input-container flex flex-col items-center">
          <div className="tab-menu-container flex flex-col items-center">
            <input
              type="text"
              placeholder="Search here..."
              className="search-input"
            />
            <button className="search-btn">Go</button>

            <ul className="small-menu">
              {tabItems.map((tab) => (
                <li key={tab.id}>
                  <a href={tab.path} className="flex flex-row items-center">
                    {tab.icon}
                    <p className="ml-2">{tab.title}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ul className="menu flex flex-row justify-around items-center">
        {tabItems.map((tab) => (
          <li key={tab.id} className="mr-2">
            <a href={tab.path} className="flex flex-row items-center">
              {tab.icon}
              <p className="ml-1.5">{tab.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default App;
