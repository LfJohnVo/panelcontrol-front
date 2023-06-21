import AddIcon from "@mui/icons-material/Add";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link";
import { GridToolbarQuickFilter } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { Link as linkrouter, useNavigate } from "react-router-dom";
import { deleteRecord } from "../../common/text/Notify";
import { useGetAllClients } from "../../hooks/useClient";
import { DialogCustom } from "../common/dialogs";
import { BoxTableLayout, DataGridLayout } from "../common/layouts";
import Loading from "../loading/Loading";
import NotifyContainer from "../notify/NotifyContainer";

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
              Clientes creados
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
                navigate("/clienteCreate");
              }}
            >
              Crear Cliente
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

function TableCliente() {
  const [
    getInfo,
    loading,
    data,
    handleClickDelete,
    handleClickEdit,
    open,
    handleClose,
    handleOpen,
  ] = useGetAllClients();

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
              to={`/cliente/${cellValues.row.id}/details`}
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
      field: "name",
      headerName: "Nombre",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "email",
      headerName: "Correo",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "col3",
      headerName: "Razon social",
      width: 150,
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
                  handleClickEdit(e, cellValues);
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={async (e) => {
                  handleOpen(e, cellValues);
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

  useEffect(() => {
    getInfo();
  }, []);

  const getClients = async () => {
    try {
      dispatch(changeTrue());
      const response = await getAllClients(token.token);
      setData(response);
      dispatch(changeFalse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <>
      <NotifyContainer />
      <DialogCustom
        open={open}
        handleClose={handleClose}
        handleClickDelete={handleClickDelete}
        text={deleteRecord}
      />

      {loading ? (
        <Loading />
      ) : (
        <Grid item xs={12} md={12} lg={12}>
          <BoxTableLayout>
            <DataGridLayout
              data={data}
              columns={columns}
              quickSearchToolbar={QuickSearchToolbar}
            />
          </BoxTableLayout>
        </Grid>
      )}
    </>
  );
}

export default TableCliente;
