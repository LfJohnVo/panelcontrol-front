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
import { deleteCliente, getAllClients } from "../../services/clientes/clientes";
import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../features/login/loginSlice";
import Loading from "../loading/Loading";
import NotifyContainer from "../notify/NotifyContainer";
import { cliente } from "../../common/text/Notify";
import { notifyMessage } from "../notify/NotifyMessage";
import { useGetClients } from "../../hooks";

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
  const navigate = useNavigate();

  const token = useSelector(selectUser);
  const [clients, loading, getClients] = useGetClients();

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
      field: "razon_social",
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
                  handleClickEditCliente(e, cellValues);
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
              <IconButton
                aria-label="edit"
                onClick={async (e) => {
                  handleClickDeleteCliente(e, cellValues);
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

  const handleClickEditCliente = async (e, cellValues) => {
    const id = cellValues.row.id;
    navigate(`/cliente/${id}/edit`);
  };

  const handleClickDeleteCliente = async (e, cellValues) => {
    const id = cellValues.row.id;
    await deleteCliente(id, token.token);
    notifyMessage(cliente.delete);
    getClients();
  };

  return (
    <>
      <NotifyContainer />
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
              rows={clients}
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

export default TableCliente;
