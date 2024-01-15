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

export const formatCurrency = (value) => {
  try {
    // Use try-catch to handle potential errors
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(value);
  } catch (error) {
    // If an error occurs during formatting, return the original value
    console.error("Error formatting currency:", error);
    return value;
  }
};

export const formatDate = (timestamp) => {
  const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 7 days * 24 hours/day * 60 minutes/hour * 60 seconds/minute * 1000 milliseconds/second
  const newTimestamp = timestamp + oneWeekInMilliseconds;

  const date = new Date(newTimestamp);

  // Use toISOString to get the date in ISO 8601 format
  const isoDateString = date.toISOString();

  // Replace colons with URL-encoded colons
  const formattedDate = isoDateString.replace(/:/g, "%3A");

  return formattedDate;
};
