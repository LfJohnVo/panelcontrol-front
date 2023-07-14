import React from 'react';
import { Button, Stack, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link as linkrouter, useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import { useGetCatalogs } from '../../hooks/catalogs';
import { TableSearchBar } from '../common/tales';
import { DataGridLayout, TableLayout } from '../common/layouts';

const TableProjects = () => {
  const [loading, catalogs, handleGetCatalogs] = useGetCatalogs();
  const navigate = useNavigate();

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      headerAlign: 'center',
      align: 'center',
      width: 100,
      headerClassName: 'super-app-theme--header2',
      renderCell: cellValues => {
        return (
          <Link
            component={linkrouter}
            to={`/projects/${cellValues.row.id}`}
            underline="none"
          >
            {cellValues.row.id}
          </Link>
        );
      },
    },
    {
      field: 'title',
      headerName: 'Nombre',
      flex: true,
      minWidth: 150,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'Opciones',
      headerClassName: 'super-app-theme--header',
      flex: true,
      minWidth: 100,
      renderCell: cellValues => {
        return (
          <Stack direction="row" spacing={2}>
            <IconButton
              aria-label="edit"
              onClick={async e => {
                navigate(`/projects/${cellValues.row.id}/update`);
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
                  navigate('/projects/create');
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

export default TableProjects;
