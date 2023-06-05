import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";

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

      {/* Users */}
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

      {/* Clientes */}
      <ListItemButton
        onClick={() => {
          navigate("/clientes");
        }}
      >
        <ListItemIcon>
          <PersonOutlineOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Clientes" />
      </ListItemButton>

      {/* Catalogo */}
      <ListItemButton
        onClick={() => {
          navigate("/catalogo");
        }}
      >
        <ListItemIcon>
          <CategoryOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Catalogo" />
      </ListItemButton>
    </>
  );
}

export default ListItems;
