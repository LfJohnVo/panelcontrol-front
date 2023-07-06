import React from 'react';
import { Button, Stack, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link as linkrouter, useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import { useGetCatalogs } from '../../hooks/catalogs';
import { TableSearchBar } from '../common/tales';
import { DataGridLayout, TableLayout } from '../common/layouts';

const TableCatalog = () => {
  const [loading, catalogs, handleGetCatalogs] = useGetCatalogs();
  const navigate = useNavigate();

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 150,
      headerClassName: 'super-app-theme--header2',
      renderCell: cellValues => {
        return (
          <Link
            component={linkrouter}
            to={`/catalogo/${cellValues.row.id}/details`}
            underline="none"
            sx={{ ml: '30px', textAlign: 'left' }}
          >
            {cellValues.row.id}
          </Link>
        );
      },
    },
    {
      field: 'title',
      headerName: 'Nombre',
      width: 550,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'Opciones',
      headerClassName: 'super-app-theme--header',
      width: 350,
      renderCell: cellValues => {
        return (
          <Stack direction="row" spacing={2}>
            <IconButton
              aria-label="edit"
              onClick={async e => {
                navigate(`/catalogo/${cellValues.row.id}/edit`);
              }}
            >
              <EditOutlinedIcon />
            </IconButton>
          </Stack>
        );
      },
    },
  ];

  return (
    <TableLayout loading={loading}>
      <DataGridLayout
        data={catalogs}
        columns={columns}
        quickSearchToolbar={() => {
          return (
            <TableSearchBar tableTitle="Servicios registrados">
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
  );
};

export default TableCatalog;
