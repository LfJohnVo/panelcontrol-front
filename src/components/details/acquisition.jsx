import React from 'react';
import { PaperLayout } from '../common/layouts';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { DetailTypografy } from '../common/typografy';
import Loading from '../common/loading';
import { useGetAcquisition } from '../../hooks/acquisitions';

function DetailAcquisition() {
  const [loading, acquisition] = useGetAcquisition();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <PaperLayout>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: 'auto',
              background: '#FFFFF',
              width: '100%',
            }}
          >
            <Grid item sm={12}>
              <Typography
                component="h1"
                variant="h1"
                mb={'16px'}
                mt={'25px'}
                ml={'35px'}
              >
                Adquisición
              </Typography>
            </Grid>
            <Divider sx={{ mb: '21px' }} />
            <Grid
              container
              item
              spacing={2}
              md={12}
              direction="row"
              justifyContent="flex-start"
              sx={{ mb: '80px', pl: '39px', pr: '146px' }}
            >
              <DetailTypografy
                title="Nombre del cliente"
                data={acquisition.client_name}
                size={4}
              />
              <DetailTypografy
                title="Email del cliente"
                data={acquisition.client_email}
                size={4}
              />
            </Grid>
            <Divider sx={{ mb: '21px' }} />
            <Grid
              container
              item
              spacing={2}
              md={12}
              direction="row"
              justifyContent="flex-start"
              sx={{ mb: '80px', pl: '39px', pr: '146px' }}
            >
              <DetailTypografy
                title="Nombre del proyecto"
                data={acquisition.proyect}
                size={4}
              />
              <DetailTypografy
                title="Estatus del proyecto"
                data={acquisition.is_active ? 'Activo' : 'Desacticado'}
                size={4}
              />
            </Grid>
            <Divider sx={{ mb: '21px' }} />
            <Grid item sm={12}>
              <Typography
                component="h1"
                variant="h1"
                mb={'16px'}
                mt={'25px'}
                ml={'35px'}
              >
                Modulos Adquiridos
              </Typography>
            </Grid>
            <Divider sx={{ mb: '21px' }} />
            <Grid
              container
              item
              spacing={2}
              md={12}
              direction="row"
              justifyContent="flex-start"
              sx={{ mb: '80px', pl: '39px', pr: '146px' }}
            >
              {acquisition.buy_modules &&
                acquisition.buy_modules.map(item => {
                  return (
                    <Grid
                      container
                      item
                      spacing={2}
                      md={12}
                      direction="row"
                      justifyContent="flex-start"
                      sx={{ mb: '10px', pl: '39px' }}
                      key={item.id}
                    >
                      <DetailTypografy
                        title="Nombre del modulo"
                        data={item.module.title}
                        size={3}
                      />
                      <DetailTypografy
                        title="URL del modulo"
                        data={item.module.url}
                        size={3}
                      />
                      <DetailTypografy
                        title="Fecha de activación"
                        data={item.activation_date}
                        size={2}
                      />
                      <DetailTypografy
                        title="Fecha de expiración"
                        data={item.expiration_date}
                        size={2}
                      />
                      <DetailTypografy
                        title="Estatus del modulo"
                        data={item.is_active ? 'Activo' : 'Desactivado'}
                        size={2}
                      />
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </PaperLayout>
      )}
    </>
  );
}

export default DetailAcquisition;
