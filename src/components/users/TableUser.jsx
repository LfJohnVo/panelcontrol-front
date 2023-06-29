import React from "react";
import { useEffect } from "react";
import { Grid, Box, Stack, IconButton } from "@mui/material";
import { GridToolbarQuickFilter } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Link as linkrouter, useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import { sf } from "../../common/text/SF";
import Loading from "../loading/Loading";
import NotifyContainer from "../notify/NotifyContainer";
import { useGetAllUser } from "../../hooks/useUser";
import { BoxTableLayout, DataGridLayout } from "../common/layouts";
import { ButtonCustom } from "../common/buttons";
import { TypographyCustom } from "../common/Typographys";
import { deleteRecord } from "../../common/text/Notify";
import { DialogCustom } from "../common/dialogs";

DialogCustom;

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
            <TypographyCustom
              title="Usuarios creados"
              component="h1"
              variant="h5"
              fontSize="20px"
              sx={{ ml: "35px", mt: "26px" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "auto",
          background: "#FFFFF",
        }}
      >
        <Grid item md={6} xs={12} mt={"33px"} ml={"22px"} mb={"16px"}>
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
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              p: 1,
              pb: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              background: "#FFFFF",
            }}
          >
            <ButtonCustom
              title="Crear usuario"
              type="button"
              onClick={() => {
                navigate("/userCreate");
              }}
              startIcon={<AddIcon />}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

function TableUser() {
  const [
    getUsers,
    loading,
    data,
    handleClickDeleteUser,
    handleClickEditUser,
    open,
    handleClose,
    handleOpen,
  ] = useGetAllUser();

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
              to={`/user/${cellValues.row.id}/Details`}
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
      field: "contacto",
      headerName: "Contacto",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "domicilio",
      headerName: "Domicilio",
      width: 350,
      headerClassName: "super-app-theme--header",
      renderCell: (cellValues) => {
        return cellValues.direccion ? cellValues.direccion : sf;
      },
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
                  handleClickEditUser(e, cellValues);
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
    getUsers();
  }, []);

  return (
    <>
      <NotifyContainer />
      <DialogCustom
        open={open}
        handleClose={handleClose}
        handleClickDelete={handleClickDeleteUser}
        text={deleteRecord}
      />

      {loading ? (
        <Loading />
      ) : (
        <>
          <Grid item xs={12} md={12} lg={12}>
            <BoxTableLayout>
              <DataGridLayout
                data={data}
                columns={columns}
                quickSearchToolbar={QuickSearchToolbar}
              />
            </BoxTableLayout>
          </Grid>
        </>
      )}
    </>
  );
}

export default TableUser;
