import React from 'react';
import { PaperLayout } from '../common/layouts';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { DetailTypografy } from '../common/typografy';
import Loading from '../common/loading';
import { useGetClient } from '../../hooks/clients';

function DetailClient() {
  const [loading, client] = useGetClient();
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
                Cliente
              </Typography>
            </Grid>
            <Divider sx={{ mb: '21px' }} />
            <Grid
              container
              item
              spacing={2}
              md={12}
              direction="row"
              justifyContent="space-around"
              sx={{ mb: '80px', pl: '39px', pr: '146px' }}
            >
              <DetailTypografy title="Nombre" data={client.name} size={4} />
              <DetailTypografy title="Email" data={client.email} size={4} />
              <DetailTypografy
                title="Domicilio"
                data={client.domicilio}
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
              justifyContent="flext-start"
              sx={{ mb: '80px', pl: '39px', pr: '146px' }}
            >
              <DetailTypografy
                title="Razón Social"
                data={client.razon_social}
                size={4}
              />
              <DetailTypografy
                title="Contacto"
                data={client.contacto}
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
              justifyContent="flext-start"
              sx={{ mb: '80px', pl: '39px', pr: '146px' }}
            >
              <DetailTypografy
                title="Representante"
                data={client.representante}
                size={4}
              />
              <DetailTypografy
                title="Email del Representante"
                data={client.representante_email}
                size={4}
              />
              <DetailTypografy
                title="Contacto del Representante"
                data={client.representante_telefono}
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
              justifyContent="flext-start"
              sx={{ mb: '80px', pl: '39px', pr: '146px' }}
            >
              <DetailTypografy
                title="Consultor"
                data={client.consultor}
                size={4}
              />
              <DetailTypografy
                title="Email del Consultor"
                data={client.consultor_email}
                size={4}
              />
              <DetailTypografy
                title="Contacto del Consultor"
                data={client.consultor_telefono}
                size={4}
              />
            </Grid>
          </Box>
        </PaperLayout>
      )}
    </>
  );
}

export default DetailClient;
