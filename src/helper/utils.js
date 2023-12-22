import React from "react";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

export const NAVBAR = [
  {
    label: "Home",
    link: "/dashboard",
    icon: React.createElement(HiOutlineHome, { className: "w-6 h-6" }),
  },
  {
    label: "Bookings",
    link: "/bookings",
    icon: React.createElement(HiOutlineCalendarDays, { className: "w-6 h-6" }),
  },
  {
    label: "Cabins",
    link: "/cabins",
    icon: React.createElement(HiOutlineHomeModern, { className: "w-6 h-6" }),
  },
  {
    label: "User",
    link: "/users",
    icon: React.createElement(HiOutlineUsers, { className: "w-6 h-6" }),
  },
  {
    label: "Setting",
    link: "/settings",
    icon: React.createElement(HiOutlineCog6Tooth, { className: "w-6 h-6" }),
  },
];
