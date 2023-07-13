import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { DataGrid } from '@mui/x-data-grid';
import { ToastContainer } from 'react-toastify';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline, Grid, Toolbar } from '@mui/material';
import { PrincipalNavbar } from './navbar';
import { PrincipalSidebar } from './sidebar';
import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import Loading from './loading';
import { PrincipalTitle } from './titles';

export const PaperLayout = ({
  children,
  color = '#FFFFFF',
  loading = false,
}) => {
  return (
    <Paper
      sx={{
        p: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        background: color,
        marginBottom: '1em',
      }}
    >
      {loading ? <Loading /> : <Grid container>{children}</Grid>}
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

export const TableLayout = ({ children, loading }) => {
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <Grid
          item
          sx={{
            mb: '40px',
            width: '100%',
            background: 'white',
          }}
        >
          {children}
        </Grid>
      )}
    </Container>
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
    <Grid container>
      <Backdrop
        sx={{ color: 'blue', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress />
      </Backdrop>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={1}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
    palette: {
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
    typography: {
      h1: {
        fontSize: 25,
        color: '#2567AE',
      },
      h2: {
        fontSize: 20,
        color: '#2567AE',
      },
      h3: {
        fontSize: 15,
        color: '#2567AE',
      },
      h1Ligth: {
        fontSize: 30,
        color: '#FFFF',
      },
      subtitleLigth: {
        fontSize: 20,
        color: '#FFFF',
      },
      textLigth: {
        fontSize: 12,
        color: '#FFFF',
      },
      breadcrumbs: {
        fontSize: 30,
        color: '#2567AE',
      },
      avatarName: {
        fontSize: 12,
      },
      avatarType: {
        fontSize: 10,
      },
      statusActive: {
        fontSize: 10,
        color: '#17B265',
      },
      statusPausado: {
        fontSize: 10,
        color: '#FF0000',
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

export const ViewLayout = ({ children, actualPage, breadcrumbs }) => {
  return (
    <Container>
      <PrincipalTitle actualPage={actualPage} breadcrumbs={breadcrumbs} />
      {children}
    </Container>
  );
};
