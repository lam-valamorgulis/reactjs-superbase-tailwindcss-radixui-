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
    icon: React.createElement(HiOutlineHome, {
      className: "w-8 h-8",
    }),
  },
  {
    label: "Bookings",
    link: "/bookings",
    icon: React.createElement(HiOutlineCalendarDays, {
      className: "w-8 h-8",
    }),
  },
  {
    label: "Cabins",
    link: "/cabins",
    icon: React.createElement(HiOutlineHomeModern, { className: "w-8 h-8" }),
  },
  {
    label: "User",
    link: "/users",
    icon: React.createElement(HiOutlineUsers, { className: "w-8 h-8" }),
  },
  {
    label: "Setting",
    link: "/settings",
    icon: React.createElement(HiOutlineCog6Tooth, { className: "w-8 h-8" }),
  },
];
