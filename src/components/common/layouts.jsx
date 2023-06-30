import { colorsTable } from '../../common/color/color';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { DataGrid } from '@mui/x-data-grid';
import { ToastContainer } from 'react-toastify';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid, Toolbar } from '@mui/material';
import { PrincipalNavbar } from './navbar';
import { PrincipalSidebar } from './sidebar';
import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import TitleModule from './titles';

export const PaperLayout = ({ children }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: '61px 51px 64px 27px',
        display: 'flex',
        flexDirection: 'row',
        height: 'auto',
        background: colorsTable.white,
        mb: '125px',
        border: `1px solid ${colorsTable.borderColor}`,
      }}
    >
      {children}
    </Paper>
  );
};

export const BackdropCustom = ({ open }) => {
  return (
    <Backdrop
      sx={{ color: 'blue', zIndex: theme => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export const BoxTableLayout = ({ children }) => {
  return (
    <Box
      component={'div'}
      sx={{
        height: 737,
        mb: '40px',
        width: '100%',
        '& .super-app-theme--header2': {
          backgroundColor: colorsTable.colorCellHeader,
          pl: '39px',
        },
        '& .super-app-theme--header': {
          backgroundColor: colorsTable.colorCellHeader,
        },
      }}
    >
      {children}
    </Box>
  );
};

export const DataGridLayout = ({ data, columns, quickSearchToolbar }) => {
  return (
    <DataGrid
      rows={data}
      columns={columns}
      disableColumnMenu
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
      }}
      pageSizeOptions={[5, 10, 25]}
      slots={{ toolbar: quickSearchToolbar }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
        },
      }}
      style={{
        background: colorsTable.colorFondo,
      }}
    />
  );
};

/**
 * Usa este layout para envolver los formularios y mostrar mensajes de notificaciones
 * cuando algo ocurra
 *
 * @param {Component} children
 * @returns Component
 */
export const FormLayout = ({ children, open }) => {
  return (
    <Grid>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        sx={{
          zIndex: 99999999,
        }}
      />
      <Backdrop
        sx={{ color: 'blue', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress />
      </Backdrop>
      {children}
    </Grid>
  );
};

/**
 * Usa este componente para envolver a las views generales de la aplicacion
 *
 * @param {Component} children
 * @returns Component
 */
export const PrincipalLayout = ({ children }) => {
  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        h1 {
          color: #2567AE;
        }
      `,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column">
        {children}
      </Box>
    </ThemeProvider>
  );
};

export const PrincipalAuthenticateLayout = ({ children }) => {
  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        h1 {
          color: #2567AE;
        }
      `,
      },
    },
  });
  const [open, setOpen] = useState(false);
  const handleChange = useCallback(() => {
    setOpen(!open);
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ display: 'flex' }}>
        <PrincipalNavbar
          theme={theme}
          open={open}
          handleChange={handleChange}
        />
        <PrincipalSidebar
          theme={theme}
          open={open}
          handleChange={handleChange}
        />
        <Box
          component="main"
          sx={{
            backgroundColor: theme =>
              theme.palette.mode === 'light'
                ? '#EDF1F7'
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export const PrincipalMenuLayout = () => {
  return (
    <PrincipalAuthenticateLayout>
      <Outlet />
    </PrincipalAuthenticateLayout>
  );
};
