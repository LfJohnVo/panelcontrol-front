<<<<<<< HEAD
import React from "react";
import { useEffect, useState } from "react";
import { colorsTable } from "../../common/color/color";
import { Grid, Paper, Typography, Divider, Box } from "@mui/material";
=======
import { Divider, Grid, Paper } from "@mui/material";
>>>>>>> P360-43-correccion-de-vista-del-modulo-de-catalogo-servicios
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";
import { colorsTable } from "../../common/color/color";
import { sf } from "../../common/text/SF";
import TitleModul from "../../components/bienvenida/TitleModul";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import { selectUser } from "../../features/login/loginSlice";
import { getOneCliente } from "../../services/clientes/clientes";
import { sf } from "../../common/text/SF";

function ClienteDetail(props) {
  const { id } = useParams();
  const token = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const [data, setData] = useState();

  //theme
=======
import { useDetailClient } from "../../hooks/useClient";
import { TypographyCustom } from "../common/Typographys";
import Loading from "../loading/Loading";

function ClienteDetail(props) {
  const [data, loading, getDetailInfo] = useDetailClient();
>>>>>>> P360-43-correccion-de-vista-del-modulo-de-catalogo-servicios

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

<<<<<<< HEAD
  //functions
  const getDetailCliente = async () => {
    try {
      dispatch(changeTrue());
      const response = await getOneCliente(id, token.token);
      setData(response);
      dispatch(changeFalse());
    } catch (error) {
      setErr(true);
      setErrorMessage(error.message);
    }
  };

  //Effects
=======
>>>>>>> P360-43-correccion-de-vista-del-modulo-de-catalogo-servicios
  useEffect(() => {
    getDetailInfo();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Grid item md={12} sm={12} xs={12}>
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
                  pb: "25px",
                }}
              >
                <Grid item sm={12}>
                  <TypographyCustom
                    title="Cliente"
                    component="h1"
                    variant="h1"
                    sx={{ mb: "16px", mt: "25px", ml: "35px" }}
                  />
                </Grid>
                <Divider />
                <Grid
                  item
                  sm={12}
                  sx={{ m: "27px 44px 25px 34px", textAlign: "justify" }}
                >
<<<<<<< HEAD
                  <Typography component="h1" variant="h3">
                    {data && data.name ? data.name : sf}
                  </Typography>
=======
                  <TypographyCustom
                    title={data && data.name ? data.name : sf}
                    component="h1"
                    variant="h3"
                  />
>>>>>>> P360-43-correccion-de-vista-del-modulo-de-catalogo-servicios
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
<<<<<<< HEAD
                    <Typography component="h1" variant="h2">
                      ID
                    </Typography>
                    <Typography component="p" variant="h3" sx={{ pt: "16px" }}>
                      {data && data.id ? data.id : sf}
                    </Typography>
                  </Grid>
                  <Grid item md={2} sm={4} xs={12} sx={{ pt: "16px" }}>
                    <Typography component="h1" variant="h2">
                      CREADO
                    </Typography>
                    <Typography component="p" variant="h3" sx={{ pt: "16px" }}>
                      {data && data.create_date ? data.create_date : sf}
                    </Typography>
=======
                    <TypographyCustom title="ID" component="h1" variant="h2" />
                    <TypographyCustom
                      title={data && data.id ? data.id : sf}
                      component="p"
                      variant="h3"
                      sx={{ pt: "16px" }}
                    />
                  </Grid>
                  <Grid item md={2} sm={4} xs={12} sx={{ pt: "16px" }}>
                    <TypographyCustom
                      title="CREADO"
                      component="h1"
                      variant="h2"
                    />
                    <TypographyCustom
                      title={data && data.create_date ? data.create_date : sf}
                      component="p"
                      variant="h3"
                      sx={{ pt: "16px" }}
                    />
>>>>>>> P360-43-correccion-de-vista-del-modulo-de-catalogo-servicios
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
<<<<<<< HEAD
                    <Typography component="h1" variant="h2">
                      CORREO
                    </Typography>
                    <Typography component="p" variant="h3" sx={{ pt: "16px" }}>
                      {data && data.email ? data.email : sf}
                    </Typography>
                  </Grid>
                  <Grid item md={2} sm={4} xs={12}>
                    <Typography component="h1" variant="h2">
                      RAZÓN SOCIAL
                    </Typography>
                    <Typography component="p" variant="h3" sx={{ pt: "16px" }}>
                      {data && data.razon_social ? data.razon_social : sf}
                    </Typography>
                  </Grid>
                  <Grid item md={2} sm={4} xs={12}>
                    <Typography component="h1" variant="h2">
                      CONTACTO
                    </Typography>
                    <Typography component="p" variant="h3" sx={{ pt: "16px" }}>
                      {data && data.contacto ? data.contacto : sf}
                    </Typography>
=======
                    <TypographyCustom
                      title="CORREO"
                      component="h1"
                      variant="h2"
                    />
                    <TypographyCustom
                      title={data && data.email ? data.email : sf}
                      component="p"
                      variant="h3"
                      sx={{ pt: "16px" }}
                    />
                  </Grid>
                  <Grid item md={2} sm={4} xs={12}>
                    <TypographyCustom
                      title="RAZON SOCIAL"
                      component="h1"
                      variant="h2"
                    />
                    <TypographyCustom
                      title={data && data.razon_social ? data.razon_social : sf}
                      component="p"
                      variant="h3"
                      sx={{ pt: "16px" }}
                    />
                  </Grid>
                  <Grid item md={2} sm={4} xs={12}>
                    <TypographyCustom
                      title="CONTACTO"
                      component="h1"
                      variant="h2"
                    />
                    <TypographyCustom
                      title={data && data.contacto ? data.contacto : sf}
                      component="p"
                      variant="h3"
                      sx={{ pt: "16px" }}
                    />
>>>>>>> P360-43-correccion-de-vista-del-modulo-de-catalogo-servicios
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
<<<<<<< HEAD
                    <Typography component="h1" variant="h2">
                      DIRECCIÓN
                    </Typography>
                    <Typography component="p" variant="h3" sx={{ pt: "16px" }}>
                      {data && data.domicilio ? data.domicilio : sf}
                    </Typography>
=======
                    <TypographyCustom
                      title="DIRRECION"
                      component="h1"
                      variant="h2"
                    />
                    <TypographyCustom
                      title={data && data.contacto ? data.contacto : sf}
                      component="p"
                      variant="h3"
                      sx={{ pt: "16px" }}
                    />
>>>>>>> P360-43-correccion-de-vista-del-modulo-de-catalogo-servicios
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

export default ClienteDetail;
