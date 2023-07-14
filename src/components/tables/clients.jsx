import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Button, IconButton, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import { Link as linkrouter, useNavigate } from 'react-router-dom';
import { DialogCustom } from '../common/dialogs';
import { DataGridLayout, FormLayout, TableLayout } from '../common/layouts';
import { useDeleteClient, useGetClients } from '../../hooks/clients';
import { TableSearchBar } from '../common/tales';

const TableCliente = () => {
  const [loadingClientes, clients, handleGetClients] = useGetClients();
  const [alert, handleOpenAlert, handleCloseAlert, handleDelete, deleted] =
    useDeleteClient();
  const navigate = useNavigate();

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
      headerAlign: 'center',
      align: 'center',
      headerClassName: 'super-app-theme--header2',
      renderCell: cellValues => {
        return (
          <Link
            component={linkrouter}
            to={`/clients/${cellValues.row.id}`}
            underline="none"
          >
            {cellValues.row.id}
          </Link>
        );
      },
    },
    {
      field: 'name',
      headerName: 'Nombre',
      flex: true,
      minWidth: 150,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'email',
      headerName: 'Correo',
      flex: true,
      minWidth: 150,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'razon_social',
      headerName: 'Razon social',
      flex: true,
      minWidth: 150,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'Opciones',
      flex: true,
      minWidth: 100,
      headerClassName: 'super-app-theme--header',
      renderCell: cellValues => {
        return (
          <Stack direction="row" spacing={0.5}>
            <IconButton
              aria-label="edit"
              onClick={async e => {
                navigate(`/clients/${cellValues.row.id}/update`);
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
        text="Desea eliminar este cliente"
      />
      <TableLayout loading={loadingClientes}>
        <DataGridLayout
          data={clients}
          columns={columns}
          quickSearchToolbar={() => {
            return (
              <TableSearchBar tableTitle="Clientes creados">
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => {
                    navigate('/clients/create');
                  }}
                >
                  Crear Cliente
                </Button>
              </TableSearchBar>
            );
          }}
        />
      </TableLayout>
    </FormLayout>
  );
};

export default TableCliente;
