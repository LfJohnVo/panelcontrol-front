import { useNavigate } from 'react-router-dom';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import { FaCogs, FaUsers, FaBookOpen } from 'react-icons/fa';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { FormLayout } from './layouts';
import { useLogout } from '../../hooks';

export const PrincipalMenu = () => {
  const navigate = useNavigate();
  return (
    <List component="nav">
      <Tooltip title="Dashboard">
        <ListItemButton
          onClick={() => {
            navigate('/dashboard');
          }}
        >
          <ListItemIcon>
            <DashboardOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Tooltip>

      <Tooltip title="Usuarios">
        <ListItemButton
          onClick={() => {
            navigate('/users');
          }}
        >
          <ListItemIcon>
            <PersonOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Usuarios" />
        </ListItemButton>
      </Tooltip>

      <Tooltip title="Clientes">
        <ListItemButton
          onClick={() => {
            navigate('/clientes');
          }}
        >
          <ListItemIcon>
            <FaUsers />
          </ListItemIcon>
          <ListItemText primary="Clientes" />
        </ListItemButton>
      </Tooltip>

      <Tooltip title="Catalogo">
        <ListItemButton
          id="catalogo"
          onClick={() => {
            navigate('/catalogo');
          }}
        >
          <ListItemIcon>
            <ConnectWithoutContactOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Catalogo" />
        </ListItemButton>
      </Tooltip>

      <Tooltip title="Adquisiciones">
        <ListItemButton
          id="adquisiciones"
          onClick={() => {
            navigate('/adquisiciones');
          }}
        >
          <ListItemIcon>
            <ShoppingBagOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Adquisiciones" />
        </ListItemButton>
      </Tooltip>
    </List>
  );
};

export const OptionsNavMenu = () => {
  const [loading, handleLogout] = useLogout();
  return (
    <FormLayout open={loading}>
      <List component="nav">
        <Tooltip title="Configuracion">
          <ListItemButton>
            <ListItemIcon>
              <FaCogs />
            </ListItemIcon>
            <ListItemText primary="Opciones" />
          </ListItemButton>
        </Tooltip>
        <Tooltip title="Logout">
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Cerrar sesion" />
          </ListItemButton>
        </Tooltip>
      </List>
    </FormLayout>
  );
};
