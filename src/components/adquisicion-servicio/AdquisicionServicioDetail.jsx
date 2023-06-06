import React from "react";
import { useEffect } from "react";
import { colorsTable } from "../../common/color/color";
import { Grid, Paper, Typography, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  changeFalse,
  changeTrue,
  selectLoading,
} from "../../features/loading/loadingSlice";
import { useDispatch, useSelector } from "react-redux";
import TitleModul from "../../components/bienvenida/TitleModul";

function AdquisicionServicioDetail(props) {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  //theme

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: 20,
      },
      h2: {
        fontSize: 18,
      },
      h3: {
        fontSize: 15,
      },
    },
  });

  //functions
  const getDetailAdquisicionServicio = () => {
    try {
      setTimeout(() => {
        dispatch(changeTrue());
        setTimeout(() => {
          dispatch(changeFalse());
        }, 2000);
      }, 100);
    } catch (error) {
      setErr(true);
      setErrorMessage(error.message);
    }
  };

  //Effects
  useEffect(() => {
    getDetailAdquisicionServicio();
  }, []);

  return (
    <>
      {loading ? (
        <Grid item xs={12} md={12} lg={12} sx={{ paddingTop: "50vh" }}>
          <></>
        </Grid>
      ) : (
        <>
          <Grid item md={12}>
            <TitleModul {...props} />
          </Grid>

          <ThemeProvider theme={theme}>
            <Grid item xs={12} md={12} lg={12} mb={3}>
              <Paper
                elevation={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "auto",
                  background: colorsTable.colorFondo,
                  mb: "105px",
                }}
              >
                <Grid item sm={12}>
                  <Typography
                    component="h1"
                    variant="h1"
                    mb={"16px"}
                    mt={"25px"}
                    ml={"35px"}
                  >
                    Servicio adquirido
                  </Typography>
                </Grid>
                <Divider />
                <Grid
                  item
                  sm={12}
                  sx={{ m: "27px 44px 136px 34px", textAlign: "justify" }}
                >
                  <Typography component="h1" variant="h3"></Typography>
                </Grid>
                <Divider sx={{ mb: "21px" }} />
                <Grid
                  container
                  item
                  spacing={2}
                  md={12}
                  direction="row"
                  justifyContent="start"
                  sx={{ mb: "80px", pl: "39px", pr: "146px" }}
                >
                  <Grid item md={2} sm={4} xs={12}>
                    <Typography component="h1" variant="h2">
                      ID
                    </Typography>
                    <Typography
                      component="p"
                      variant="h3"
                      sx={{ pt: "16px" }}
                    ></Typography>
                  </Grid>
                  <Grid item md={2} sm={4} xs={12} sx={{ pt: "16px" }}>
                    <Typography component="h1" variant="h2">
                      ADQUISICIÓN
                    </Typography>
                    <Typography
                      component="p"
                      variant="h3"
                      sx={{ pt: "16px" }}
                    ></Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  spacing={3}
                  direction="row"
                  justifyContent="flex-start"
                  sx={{ mb: "80px", pl: "39px" }}
                >
                  <Grid item md={2} sm={4} xs={12}>
                    <Typography component="h1" variant="h2">
                      CLIENTE
                    </Typography>
                    <Typography
                      component="p"
                      variant="h3"
                      sx={{ pt: "16px" }}
                    ></Typography>
                  </Grid>
                  <Grid item md={2} sm={4} xs={12}>
                    <Typography component="h1" variant="h2">
                      PROYECTO
                    </Typography>
                    <Typography
                      component="p"
                      variant="h3"
                      sx={{ pt: "16px" }}
                    ></Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  spacing={3}
                  direction="row"
                  justifyContent="flex-start"
                  sx={{ pl: "39px" }}
                >
                  <Grid item md={3} sm={4} xs={12}>
                    <Typography component="h1" variant="h2">
                      SERVICIOS
                    </Typography>
                    <Typography
                      component="p"
                      variant="h3"
                      sx={{ pt: "16px" }}
                    ></Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </ThemeProvider>
        </>
      )}
    </>
  );
}

export default AdquisicionServicioDetail;
