import React from "react";
import { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Chip,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  changeFalse,
  changeTrue,
  selectLoading,
} from "../../features/loading/loadingSlice";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../loading/Loading";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import TitleModul from "../../components/bienvenida/TitleModul";
import { colorsTable } from "../../common/color/color";
import { useForm } from "react-hook-form";
import { inputValidate } from "../../common/text/Validation";
import { createCatalogo } from "../../services/catalogo/catalogo";
import NotifyContainer from "../notify/NotifyContainer";
import { notifyMessage } from "../notify/NotifyMessage";
import { catalogo } from "../../common/text/Notify";
import { redirectCatalogo } from "../../common/text/RedirectRoute";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../features/login/loginSlice";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

function FormCatalogo(props) {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState(null);
  const [errorMessage, setErrorMessage] = useState([]);
  const navigate = useNavigate();
  const token = useSelector(selectUser);
  const [moduls, setModuls] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    defaultValues: {
      moduls: moduls,
    },
  });

  //functions

  const crearCatalogo = () => {
    setTimeout(() => {
      dispatch(changeTrue());
      setTimeout(() => {
        dispatch(changeFalse());
      }, 2000);
    }, 100);
  };

  const submitForm = async (data, e) => {
    try {
      data.moduls = moduls;
      setOpen(true);
      await createCatalogo(data, token.token);
      setOpen(false);
      notifyMessage(catalogo.add);
      setTimeout(() => {
        navigate(redirectCatalogo.index);
      }, 6000);
    } catch (error) {
      setOpen(false);
      console.log(error);
    }
  };

  const handleDelete = (chipToDelete) => () => {
    setModuls((texto) => texto.filter((texto) => texto !== chipToDelete));
  };

  const handleAddChip = () => {
    if (inputValue.trim() !== "") {
      const newModul = {
        title: inputValue,
      };
      setModuls([...moduls, newModul]);
      setInputValue("");
    }
  };

  //Effects
  useEffect(() => {
    crearCatalogo();
  }, []);

  return (
    <>
      <NotifyContainer />
      <Backdrop
        sx={{ color: "blue", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {loading ? (
        <Loading />
      ) : (
        <>
          <Grid item md={12}>
            <TitleModul {...props} />
          </Grid>

          <Paper
            elevation={0}
            sx={{
              p: "61px 51px 64px 27px",
              display: "flex",
              flexDirection: "row",
              height: "auto",
              background: colorsTable.white,
              mb: "125px",
              border: `1px solid ${colorsTable.borderColor}`,
            }}
          >
            <Grid
              container
              component="form"
              onSubmit={handleSubmit(submitForm)}
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={3}
            >
              {/* columna de la izquierda */}
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={12}
                spacing={3}
                direction="row"
                justifyContent="flex-start"
                alignItems="strech"
              >
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                    label="Nombre"
                    name="title"
                    variant="outlined"
                    fullWidth
                    {...register("title", {
                      required: inputValidate.required,
                    })}
                    error={!!errors?.title}
                    helperText={errors?.title ? errors.title.message : null}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                    label="Modulo"
                    value={inputValue}
                    fullWidth
                    onChange={(e) => setInputValue(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleAddChip}>
                            <AddCircleOutlineOutlinedIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {moduls.map((modulo, index) => (
                    <Chip
                      key={index}
                      label={modulo.title}
                      style={{
                        marginTop: "10px",
                        marginRight: "5px",
                      }}
                      onDelete={handleDelete(modulo)}
                    />
                  ))}
                </Grid>
              </Grid>

              {/* Columna de la derecha */}
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={13}
                spacing={3}
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid
                  container
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  spacing={3}
                  direction="row-reverse"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item xs={12} sm={6} md={4}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Enviar Servicio
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </>
      )}
    </>
  );
}

export default FormCatalogo;

// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import {
//   TextField,
//   Button,
//   Chip,
//   InputAdornment,
//   IconButton,
// } from "@mui/material";
// import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

// export default function FormCatalogo(props) {
//   const {
//     control,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm();
//   const [moduls, setModuls] = React.useState([]);

//   const onSubmit = (data) => {
//     setModuls([...moduls, data.texto]);
//     setValue("texto", "");
//   };

//   const handleEnviar = () => {
//     console.log(moduls);
//   };

//   const handleDelete = (chipToDelete) => () => {
//     setModuls((texto) => texto.filter((texto) => texto !== chipToDelete));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Controller
//           name="texto"
//           control={control}
//           defaultValue=""
//           rules={{ required: "El campo de texto es requerido" }}
//           render={({ field }) => (
//             <TextField
//               {...field}
//               label="Modulo"
//               variant="outlined"
//               fullWidth
//               error={!!errors.texto}
//               helperText={errors.texto?.message}
//               margin="normal"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton type="submit">
//                       <AddCircleOutlineOutlinedIcon />
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           )}
//         />
//         {moduls.map((texto, index) => (
//           <Chip
//             key={index}
//             label={texto}
//             style={{ marginTop: "10px", marginRight: "5px" }}
//             onDelete={handleDelete(texto)}
//           />
//         ))}
//       </form>
//       <Button
//         onClick={handleEnviar}
//         variant="contained"
//         color="primary"
//         disabled={!moduls.length}
//       >
//         Enviar
//       </Button>
//     </div>
//   );
// }
