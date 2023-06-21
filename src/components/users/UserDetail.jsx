import React from "react";
import { useEffect, useState } from "react";
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
import Loading from "../loading/Loading";
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
                    Usuario
                  </Typography>
                </Grid>
                <Divider />
                <Grid
                  item
                  sm={12}
                  sx={{ m: "27px 44px 136px 34px", textAlign: "justify" }}
                >
                  <Typography component="h1" variant="h3">
                    {data && data.name ? data.name : sf}
                  </Typography>
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
                      DIRECCIÓN
                    </Typography>
                    <Typography component="p" variant="h3" sx={{ pt: "16px" }}>
                      {data && data.contacto ? data.contacto : sf}
                    </Typography>
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
