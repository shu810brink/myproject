import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/VerticalAlignTop";
import Warning from "@mui/icons-material/Warning";
import LockIcon from "@mui/icons-material/Lock";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/EnergySavingsLeafTwoTone";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Clock from "@mui/icons-material/LockClock";
import Charging from "@mui/icons-material/BatteryCharging20";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <LockIcon className="icon" />
              <span>E3 Apps</span>
            </li>
          </Link>
          <li>
            <Warning className="icon" />
            <span>Peak Shaving & Alert</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Ventilation</span>
          </li>
          <li>
            <InsertChartIcon className="icon" />
            <span>cooling</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Heat Pump</span>
          </li>
          <li>
            <Clock className="icon" />
            <span>Out Of Hours</span>
          </li>
          <li>
            <Charging className="icon" />
            <span>Ev Charging</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Load Shifting</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
