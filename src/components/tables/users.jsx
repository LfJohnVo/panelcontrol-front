import React from 'react';
import { Stack, IconButton, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link as linkrouter, useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import { DataGridLayout, FormLayout, TableLayout } from '../common/layouts';
import { deleteRecord } from '../../common/text/Notify';
import { DialogCustom } from '../common/dialogs';
import { useDeleteUser, useGetUsers } from '../../hooks/user';
import { TableSearchBar } from '../common/tales';

const TableUser = () => {
  const [loading, clients, handleGetClients] = useGetUsers();
  const [alert, handleOpenAlert, handleCloseAlert, handleDelete, deleted] =
    useDeleteUser();
  const navigate = useNavigate();

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 10,
      textAlign: 'center',
      headerClassName: 'super-app-theme--header2',
      renderCell: cellValues => {
        return (
          <Link
            component={linkrouter}
            to={`/user/${cellValues.row.id}/Details`}
            underline="none"
            sx={{ ml: '30px', textAlign: 'left' }}
          >
            {cellValues.row.id}
          </Link>
        );
      },
    },
    {
      field: 'name',
      headerName: 'Nombre',
      width: 100,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'email',
      headerName: 'Correo',
      width: 100,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'razon_social',
      headerName: 'Razon social',
      width: 150,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'contacto',
      headerName: 'Contacto',
      width: 150,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'domicilio',
      headerName: 'Domicilio',
      width: 400,
      headerClassName: 'super-app-theme--header',
      renderCell: cellValues => {
        return cellValues.row.domicilio ?? 'Sin domicilio';
      },
    },
    {
      field: 'Opciones',
      width: 100,
      headerClassName: 'super-app-theme--header',
      renderCell: cellValues => {
        return (
          <Stack direction="row" spacing={0.5}>
            <IconButton
              aria-label="edit"
              onClick={async e => {
                navigate(`/user/${cellValues.row.id}/edit`);
              }}
            >
              <EditOutlinedIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={async e => {
                handleOpenAlert(cellValues.row.id);
              }}
            >
              <DeleteOutlinedIcon />
            </IconButton>
          </Stack>
        );
      },
    },
  ];

  return (
    <FormLayout open={deleted}>
      <DialogCustom
        open={alert}
        handleClose={handleCloseAlert}
        handleClickDelete={handleDelete}
        text={deleteRecord}
      />

      <TableLayout loading={loading}>
        <DataGridLayout
          data={clients}
          columns={columns}
          quickSearchToolbar={() => {
            return (
              <TableSearchBar tableTitle="Usuarios creados">
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => {
                    navigate('/catalogoCreate');
                  }}
                >
                  Crear servicio
                </Button>
              </TableSearchBar>
            );
          }}
        />
      </TableLayout>
    </FormLayout>
  );
};

export default TableUser;
