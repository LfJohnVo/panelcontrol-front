import React from "react";
import { useEffect, useState } from "react";
import { colorsTable } from "../../common/color/color";
import { Grid, Paper, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TitleModul from "../../components/bienvenida/TitleModul";
import Loading from "../loading/Loading";
<<<<<<< HEAD
import { sf } from "../../common/text/SF";
import { useDetailUser } from "../../hooks/useUser";
import { TypographyCustom } from "../common/Typographys";

function UserDetail(props) {
  const [data, loading, getDetailUser] = useDetailUser();
=======
import { selectUser } from "../../features/login/loginSlice";
import { getOneUser } from "../../services/users/users";
import { sf } from "../../common/text/SF";
import { useParams } from "react-router-dom";

function UserDetail(props) {
  const { id } = useParams();
  const token = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const [data, setData] = useState();
>>>>>>> d8762f7 (P360 42 consumo de api de la aplicacion)

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

<<<<<<< HEAD
=======
  //functions
  const getDetailUser = async () => {
    try {
      dispatch(changeTrue());
      const response = await getOneUser(id, token.token);
      setData(response);
      dispatch(changeFalse());
    } catch (error) {
      setErr(true);
      setErrorMessage(error.message);
    }
  };

  //Effects
>>>>>>> d8762f7 (P360 42 consumo de api de la aplicacion)
  useEffect(() => {
    getDetailUser();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Grid item md={12}>
            <TitleModul {...props} />
          </Grid>

          <ThemeProvider theme={theme}>
            <Grid item xs={12} md={12} lg={12} mb={3}>
              <Paper
                elevation={0}
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
                    title="Usuario"
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
                  <TypographyCustom
                    title={data && data.name ? data.name : sf}
                    component="h1"
                    variant="h3"
                  />
=======
                  <Typography component="h1" variant="h3">
                    {data && data.name ? data.name : sf}
                  </Typography>
>>>>>>> d8762f7 (P360 42 consumo de api de la aplicacion)
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
=======
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
>>>>>>> d8762f7 (P360 42 consumo de api de la aplicacion)
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
=======
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
>>>>>>> d8762f7 (P360 42 consumo de api de la aplicacion)
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
=======
                    <Typography component="h1" variant="h2">
                      DIRECCIÓN
                    </Typography>
                    <Typography component="p" variant="h3" sx={{ pt: "16px" }}>
                      {data && data.contacto ? data.contacto : sf}
                    </Typography>
>>>>>>> d8762f7 (P360 42 consumo de api de la aplicacion)
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

export default UserDetail;
