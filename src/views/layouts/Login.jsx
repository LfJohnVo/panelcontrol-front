import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Login.css";
import img from "/src/public/login/logo-s4b.png";
import img2 from "/src/public/login/5143312.png";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { logincolor } from "../../common/color/color";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        h1 {
          color: ${logincolor.colorh1} ;
        }
      `,
    },
  },
});

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setTimeout(() => {
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 3000);
      }, 1000);
      navigate("/dashboard");
    } catch (error) {
      setOpen(false);
    }
  };

  const handelInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const notifyError = () =>
    toast.error("Credenciales incorrectas", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });

  const notifyErrorSistem = (title) =>
    toast.error(title, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });

  return (
    <>
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
      />

      <Backdrop
        sx={{ color: "blue", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <ThemeProvider theme={theme}>
        <Grid
          container
          component="main"
          sx={{
            height: "100vh",
          }}
        >
          <CssBaseline />
          <div className="fondo">
            <img src={img2} alt="" />
          </div>
          <Grid container item xs={12} sm={6} md={5}>
            <Box
              sx={{
                my: 3,
                mx: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              <div className="s4b">
                <img src={img} alt="Logo-s4b" />
              </div>
              <Box sx={{ mb: 1 }}>
                <Typography component="h1" variant="h4">
                  Sistema de Tickets
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography component="p" variant="h6">
                  ¡Bienvenidos a la suite que está transformando la forma en que
                  las empresas gestionan sus procesos empresariales!
                </Typography>
              </Box>
              <Typography component="p">
                Descubre cómo nuestra tecnología de vanguardia está
                revolucionando la industria y ayudando a las empresas a alcanzar
                un nuevo nivel de eficiencia y productividad.
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            md={7}
            direction="column"
            justifyContent="center"
            alignItems="flex-end"
          >
            <Box
              sx={{
                mx: 9,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                INICIAR SESIÓN
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  mt: 1,
                }}
              >
                <TextField
                  color="primary"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  variant="filled"
                  onChange={handelInputChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  variant="filled"
                  onChange={handelInputChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, height: "56px" }}
                >
                  ENTRAR
                </Button>
                <Grid container>
                  <Grid item xs></Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {/* {"He olvidado mi contraseña"} */}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
