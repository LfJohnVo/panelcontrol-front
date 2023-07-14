import React from 'react';
import { Toolbar, IconButton, Typography, Avatar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import useAppContext from '../../context/app';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const PrincipalNavbar = ({ open, handleChange }) => {
  const { user } = useAppContext();
  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: '24px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <IconButton
          onClick={handleChange}
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingRight: '1em',
          }}
        >
          <Avatar
            sx={{
              justifySelf: 'flex-end',
              marginRight: '10px',
            }}
            variant="dot"
          >
            {user?.name.charAt(0)}
          </Avatar>
          <Box>
            <Typography component="p" variant="avatarName">
              {user?.name || ''}
            </Typography>
            <Typography component="strong" variant="avatarType">
              {user?.email || ''}
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
