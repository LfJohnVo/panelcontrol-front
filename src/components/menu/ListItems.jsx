import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { useNavigate } from "react-router-dom";
export function ListItems() {
  const navigate = useNavigate();
  return (
    <>
      {/* Dashboar */}
      <ListItemButton
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        <ListItemIcon>
          <DashboardOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          navigate("/users");
        }}
      >
        <ListItemIcon>
          <PersonOutlineOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
      </ListItemButton>
    </>
  );
}

export default ListItems;
