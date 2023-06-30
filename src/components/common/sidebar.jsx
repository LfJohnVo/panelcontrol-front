import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import logoOrganizacion from '../../assets/organizacion/logo-s4b.png';
import { OptionsNavMenu, PrincipalMenu } from './menus';

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export const PrincipalSidebar = ({ open, handleChange }) => {
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={logoOrganizacion}
          alt="Logo organizacion"
          style={{ height: '65px', width: '100px' }}
        />
        <IconButton onClick={handleChange}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <PrincipalMenu />
      <Divider />
      <OptionsNavMenu />
    </Drawer>
  );
};
