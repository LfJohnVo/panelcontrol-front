import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button, Stack, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { Link as linkrouter, useNavigate } from 'react-router-dom';
import { DataGridLayout, FormLayout, TableLayout } from '../common/layouts';
import { TableSearchBar } from '../common/tales';
import {
  useChangeStatusAcquisition,
  useGetAcquisitions,
} from '../../hooks/acquisitions';
import { StatusItem, SwitchItem } from '../common/items';
import { useCallbackCreator } from '../../hooks/generals';
import { DialogCustom } from '../common/dialogs';

const TableAcquisitions = () => {
  const [loadingAcquisitions, acquisitions, handleGetAcqusitions] =
    useGetAcquisitions();
  const navigate = useNavigate();
  const [handleOpenalert, handleCloseAlert, alert, handleUpdate, deleted] =
    useChangeStatusAcquisition();

  const [dialog, setDialog] = useState('');

  const handleChangeStatus = useCallbackCreator(
    (id, status) => {
      setDialog(
        status
          ? '¿Desea desactivar esta adquisicion?'
          : '¿Desea activar esta adquisicion?'
      );
      handleOpenalert(id, status);
    },
    [acquisitions]
  );

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
            to={`/clients/${cellValues.row.id}`}
            underline="none"
            sx={{ ml: '30px', textAlign: 'left' }}
          >
            {cellValues.row.id}
          </Link>
        );
      },
    },

    {
      field: 'client_name',
      headerName: 'Cliente',
      width: 80,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'client_email',
      headerName: 'Correo',
      width: 150,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'proyect',
      headerName: 'Proyecto',
      width: 100,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'buy_modules',
      headerName: 'Modulos comprados',
      width: 200,
      headerClassName: 'super-app-theme--header',
      renderCell: cellValues => {
        return (
          <Stack direction="column" spacing={0.5}>
            {cellValues.row.buy_modules.map((item, index) => {
              return (
                <Typography component="p" key={index}>
                  {item.module.title}
                </Typography>
              );
            })}
          </Stack>
        );
      },
    },
    {
      field: 'is_active',
      headerName: 'Estatus',
      width: 80,
      headerClassName: 'super-app-theme--header',
      renderCell: cellValues => {
        return (
          <Stack direction="column" spacing={1}>
            <StatusItem status={cellValues.row.is_active} />
          </Stack>
        );
      },
    },
    {
      field: 'acciones',
      headerName: 'Des/Act',
      width: 150,
      headerClassName: 'super-app-theme--header',
      renderCell: cellValues => {
        return (
          <Stack direction="column" spacing={1}>
            <SwitchItem
              status={cellValues.row.is_active}
              onChange={handleChangeStatus(
                cellValues.row.id,
                cellValues.row.is_active
              )}
            />
          </Stack>
        );
      },
    },
  ];

  return (
    <FormLayout open={deleted}>
      <TableLayout loading={loadingAcquisitions}>
        <DialogCustom
          open={alert}
          handleClose={handleCloseAlert}
          handleClickDelete={handleUpdate}
          text={dialog}
        />
        <DataGridLayout
          data={acquisitions}
          columns={columns}
          quickSearchToolbar={() => {
            return (
              <TableSearchBar tableTitle="Lista de adquisiciones">
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => {
                    navigate('/acquisitions/create');
                  }}
                >
                  Realizar adquisicion
                </Button>
              </TableSearchBar>
            );
          }}
        />
      </TableLayout>
    </FormLayout>
  );
};

export default TableAcquisitions;
