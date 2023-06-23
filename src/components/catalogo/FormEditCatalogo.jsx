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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
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
import { useParams } from "react-router-dom";
import { selectUser } from "../../features/login/loginSlice";
import {
  getOneCatalogo,
  updateCatalogo,
  deleteCatalogoModul,
} from "../../services/catalogo/catalogo";
import { redirectCatalogo } from "../../common/text/RedirectRoute";
import { catalogo } from "../../common/text/Notify";
import { notifyMessage } from "../notify/NotifyMessage";
import { useNavigate } from "react-router-dom";
import NotifyContainer from "../notify/NotifyContainer";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

function FormEditCatalogo(props) {
  const { id } = useParams();
  const token = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState(null);
  const [errorMessage, setErrorMessage] = useState([]);
  const navigate = useNavigate();
  const [moduls, setModuls] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [dialog, setDialog] = useState(false);
  const [changeTitle, setChangeTitle] = useState("");

  //functions

  const setValuesData = (data) => {
    setValue("title", data.title);
    setModuls(data.modulo);
  };

  const editCatalogo = async () => {
    try {
      dispatch(changeTrue());
      const response = await getOneCatalogo(id, token.token);
      setValuesData(response);
      dispatch(changeFalse());
    } catch (error) {
      setErr(true);
      setErrorMessage(error.message);
    }
  };

  const submitForm = async (data, e) => {
    try {
      data.moduls = moduls;
      setOpen(true);
      await updateCatalogo(data, id, token.token);
      setOpen(false);
      notifyMessage(catalogo.edit);
      setTimeout(() => {
        navigate(redirectCatalogo.index);
      }, 6000);
    } catch (error) {
      setOpen(false);
      console.log(error);
    }
  };

  const handleDelete = (chipToDelete) => async () => {
    chipToDelete && chipToDelete.id
      ? (await deleteCatalogoModul(chipToDelete.id, token.token),
        setModuls((texto) => texto.filter((texto) => texto !== chipToDelete)))
      : setModuls((texto) => texto.filter((texto) => texto !== chipToDelete));
  };

  const handleOpenDialog = (modulo) => {
    setChangeTitle(modulo);
    setDialog(true);
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

  const handleCloseDialog = () => {
    setDialog(false);
  };

  const handleChangeTitle = (e) => {
    setChangeTitle({ ...changeTitle, title: e.target.value });
  };

  const updateChip = (modulo) => {
    console.log(modulo);
    const updatedArray = moduls.map((obj) => {
      if (obj.id === modulo.id) {
        return { ...obj, title: modulo.title };
      }
      return obj;
    });
    setModuls(updatedArray);
    setDialog(false);
  };

  //Effects
  useEffect(() => {
    editCatalogo();
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

      <Dialog
        open={dialog}
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Cambiar nombre del modulo</DialogTitle>
        <DialogContent sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            label="Titulo"
            name="changetitle"
            variant="outlined"
            fullWidth
            value={changeTitle.title}
            onChange={handleChangeTitle}
            sx={{ m: "10px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancelar</Button>
          <Button onClick={() => updateChip(changeTitle)}>Cambiar</Button>
        </DialogActions>
      </Dialog>

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
                      onClick={() => handleOpenDialog(modulo)}
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
                      Enviar Usuario
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </>
      )}
    </>
  );
}

export default FormEditCatalogo;
