import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Button, IconButton, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import { Link as linkrouter, useNavigate } from 'react-router-dom';
import { deleteRecord } from '../../common/text/Notify';
import { DialogCustom } from '../common/dialogs';
import { DataGridLayout, FormLayout, TableLayout } from '../common/layouts';
import { useDeleteClient, useGetClients } from '../../hooks/clients';
import { TableSearchBar } from '../common/tales';

const TableCliente = () => {
  const [loading, clients, handleGetClients] = useGetClients();
  const [alert, handleOpenAlert, handleCloseAlert, handleDelete, deleted] =
    useDeleteClient();
  const navigate = useNavigate();

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 10,
      headerClassName: 'super-app-theme--header2',
      renderCell: cellValues => {
        return (
          <Link
            component={linkrouter}
            to={`/cliente/${cellValues.row.id}/details`}
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
      width: 200,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'email',
      headerName: 'Correo',
      width: 200,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'col3',
      headerName: 'Razon social',
      width: 200,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'Opciones',
      width: 200,
      headerClassName: 'super-app-theme--header',
      renderCell: cellValues => {
        return (
          <Stack direction="row" spacing={0.5}>
            <IconButton
              aria-label="edit"
              onClick={async e => {
                navigate(`/cliente/${cellValues.row.id}/edit`);
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
              <TableSearchBar tableTitle="Clientes creados">
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => {
                    navigate('/clienteCreate');
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
