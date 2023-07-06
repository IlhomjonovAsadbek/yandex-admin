import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { acShrink } from "../../redux/shrink";
<<<<<<< HEAD
=======
import { useLocation } from "react-router-dom";

>>>>>>> 3d7b5ac497d5737f57ea6903f3f74322a6b68d7a
import { MdDashboard } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoIosRestaurant } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";
import { RiMenu2Line } from "react-icons/ri";
// import { RiArrowDownSLine } from "react-icons/ri";
// import { RiArrowUpSLine } from "react-icons/ri";

export const Sidebar = () => {
  const login = JSON.parse(localStorage.getItem("login")) || [];
  const isShrinkView = useSelector((state) => state.shrink);
  const dispatch = useDispatch();
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const location = useLocation().pathname;

  const handleCategoryClick = (categoryId) => {
    setActiveCategoryId(categoryId);
  };

  const handleSidebarView = () => {
    dispatch(acShrink(!acShrink));
  };

  return (
    <div className={isShrinkView ? "shrink" : "sidebar_container"}>
      <Link to="/">{isShrinkView ? "Y" : "Yandex@Eats"}</Link>
      <div className="shrink_box">
        <h3 onClick={handleSidebarView}>
          {isShrinkView ? <RiMenu2Line /> : "Dashboard Menu"}
        </h3>
        <button onClick={handleSidebarView} type="button">
          {isShrinkView ? <HiChevronRight /> : <HiChevronLeft />}
        </button>
      </div>
      <ul className="menu_box">
        {login.role === "owner"
          ? menu.map((item) => {
              return (
                <div>
                  <Link
                    className={
                      location === item.path
                        ? "menu_box_item active_menu"
                        : "menu_box_item"
                    }
                    to={item.path}
                    key={item.id}
                    onClick={() => handleCategoryClick(item.id)}
                  >
                    <span>{item.icon}</span> <p>{item.name}</p>
                  </Link>
                  {item.id === activeCategoryId && (
                    <ul className="inner_menu">
                      {category
                        .filter((cat) => cat.id === activeCategoryId)
                        .map((catItem) => (
                          <li key={catItem.path}>
                            <Link
                              to={`${item.path}${catItem.path}`}
                              style={
                                location === `${item.path}${catItem.path}`
                                  ? { color: "#17b1ea" }
                                  : {}
                              }
                            >
                              {catItem.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              );
            })
          : menu_customer.map((item) => {
              return (
                <Link to={item.path} key={item.id}>
                  <span>{item.icon}</span> <p>{item.name}</p>
                </Link>
              );
            })}
      </ul>
    </div>
  );
};

const menu = [
  {
    id: "098765",
    path: "/dashboard",
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    id: "0765435",
<<<<<<< HEAD
    path: "add/restaurant",
=======
    path: "/restaurant",
>>>>>>> 3d7b5ac497d5737f57ea6903f3f74322a6b68d7a
    name: "Restaurants",
    icon: <SiHomeassistantcommunitystore />,
  },
  {
    id: "243567",
    path: "/add/product",
    name: "AddProduct",
    icon: <IoIosRestaurant />,
  },
  {
    id: "765433",
    path: "/settings",
    name: "Settings",
    icon: <AiFillSetting />,
  },
];
const menu_customer = [
  {
    id: "098765",
    path: "/dashboard",
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    id: "243567",
    path: "/add/product",
    name: "Add Product",
    icon: <IoIosRestaurant />,
  },
  {
    id: "765433",
    path: "/settings",
    name: "Settings",
    icon: <AiFillSetting />,
  },
];

const category = [
  {
    id: "0765435",
    name: "Add restoraund",
    path: "/add",
  },
  {
    id: "0765435",
    name: "Restaurant list",
    path: "/list",
  },
  {
    id: "0765435",
    name: "orders",
    path: "/orders",
  },
];
