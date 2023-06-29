import React from "react";
import { useState, useEffect } from "react";
import { colorsTable } from "../../common/color/color";
import {
  Grid,
  Typography,
  Box,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Link as linkrouter, useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import {
  deleteCatalogo,
  getAllCatalogo,
} from "../../services/catalogo/catalogo";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTrue,
  changeFalse,
  selectLoading,
} from "../../features/loading/loadingSlice";
import { selectUser } from "../../features/login/loginSlice";
import Loading from "../loading/Loading";
import NotifyContainer from "../notify/NotifyContainer";
import { catalogo } from "../../common/text/Notify";
import { notifyMessage } from "../notify/NotifyMessage";
<<<<<<< HEAD
=======
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
>>>>>>> P360-43-correccion-de-vista-del-modulo-de-catalogo-servicios

function QuickSearchToolbar() {
  const navigate = useNavigate();
  return (
    <Box component={"div"}>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "auto",
          background: "#FFFFF",
        }}
      >
        <Grid item md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              fontSize={"20px"}
              ml={"35px"}
              mt={"26px"}
            >
              Servicios creados
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "auto",
          background: "#FFFFF",
        }}
      >
        <Grid item md={6} mt={"33px"} ml={"22px"} mb={"16px"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <GridToolbarQuickFilter />
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box
            sx={{
              p: 1,
              pb: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => {
                navigate("/catalogoCreate");
              }}
            >
              Crear servicio
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

function TableCatalogo() {
  const navigate = useNavigate();
  //variables
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const token = useSelector(selectUser);
<<<<<<< HEAD
=======
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
>>>>>>> P360-43-correccion-de-vista-del-modulo-de-catalogo-servicios

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      headerClassName: "super-app-theme--header2",
      renderCell: (cellValues) => {
        return (
          <>
            <Link
              component={linkrouter}
              to={`/catalogo/${cellValues.row.id}/details`}
              underline="none"
              sx={{ ml: "30px", textAlign: "left" }}
            >
              {cellValues.row.id}
            </Link>
          </>
        );
      },
    },
    {
      field: "title",
      headerName: "Nombre",
      width: 350,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Opciones",
      headerClassName: "super-app-theme--header",
      renderCell: (cellValues) => {
        return (
          <>
            <Stack direction="row" spacing={0.5}>
              <IconButton
                aria-label="edit"
                onClick={async (e) => {
                  handleClickEditCatalogo(e, cellValues);
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
              <IconButton
                aria-label="edit"
                onClick={async (e) => {
                  // handleClickDeleteCatalogo(e, cellValues);
                  handleClickOpen(e, cellValues);
                }}
              >
                <DeleteOutlinedIcon />
              </IconButton>
            </Stack>
          </>
        );
      },
    },
  ];

  //functions

  const handleClickEditCatalogo = async (e, cellValues) => {
    const id = cellValues.row.id;
    navigate(`/catalogo/${id}/edit`);
  };

<<<<<<< HEAD
  const handleClickDeleteCatalogo = async (e, cellValues) => {
    const id = cellValues.row.id;
    await deleteCatalogo(id, token.token);
    notifyMessage(catalogo.delete);
    getCatalogo();
  };

=======
  const handleClickDeleteCatalogo = async () => {
    await deleteCatalogo(id, token.token);
    notifyMessage(catalogo.delete);
    getCatalogo();
    handleClose();
  };

  const handleClickOpen = (e, cellValues) => {
    const id = cellValues.row.id;
    setId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setId("");
    setOpen(false);
  };

>>>>>>> P360-43-correccion-de-vista-del-modulo-de-catalogo-servicios
  const getCatalogo = async () => {
    try {
      dispatch(changeTrue());
      const response = await getAllCatalogo(token.token);
      setData(response);
      dispatch(changeFalse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCatalogo();
  }, []);

  return (
    <>
      <NotifyContainer />
<<<<<<< HEAD
=======
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Esta seguro que desea eliminar el servicio del catalogo?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClickDeleteCatalogo} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
>>>>>>> P360-43-correccion-de-vista-del-modulo-de-catalogo-servicios
      {loading ? (
        <Loading />
      ) : (
        <Grid item xs={12} md={12} lg={12}>
          <Box
            component={"div"}
            sx={{
              height: 737,
              mb: "40px",
              width: "100%",
              "& .super-app-theme--header2": {
                backgroundColor: colorsTable.colorCellHeader,
                pl: "39px",
              },
              "& .super-app-theme--header": {
                backgroundColor: colorsTable.colorCellHeader,
              },
            }}
          >
            <DataGrid
              rows={data}
              columns={columns}
              disableColumnMenu
              initialState={{
                pagination: { paginationModel: { pageSize: 10 } },
              }}
              pageSizeOptions={[5, 10, 25]}
              slots={{ toolbar: QuickSearchToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                },
              }}
              style={{
                background: colorsTable.colorFondo,
              }}
            />
          </Box>
        </Grid>
      )}
    </>
  );
}

export default TableCatalogo;
