import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined"; // Corrected import
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined"; // Corrected import
import MonetizationOnOutlined from "@mui/icons-material/MonetizationOnOutlined"; // Corrected import

const Widget = ({ type }) => {
  let data;

  // Temp data
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartCheckoutOutlinedIcon className="icon"
        style={{ color: "goldenrod", backgroundColor: "rgba(218,165,32,0.2)" }}
                
        />,
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlined className="icon" 
        style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
                
        />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceOutlinedIcon className="icon" 
        style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2)" }}
                
        />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
