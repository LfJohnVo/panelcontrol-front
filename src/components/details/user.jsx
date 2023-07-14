import React from 'react';
import { PaperLayout } from '../common/layouts';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { DetailTypografy } from '../common/typografy';
import { useGetUser } from '../../hooks/user';
import Loading from '../common/loading';

function DetailUser() {
  const [loading, user] = useGetUser();
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
                Usuario
              </Typography>
            </Grid>
            <Divider sx={{ mb: '21px' }} />
            <Grid
              container
              item
              spacing={2}
              md={12}
              direction="row"
              justifyContent="space-evenly"
              sx={{ mb: '80px', pr: '29px' }}
            >
              <DetailTypografy title="Nombre" data={user.name} size={2} />
              <DetailTypografy title="Email" data={user.email} size={4} />
              <DetailTypografy
                title="Domicilio"
                data={user.domicilio}
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
                title="Razón Social"
                data={user.razon_social}
                size={4}
              />
              <DetailTypografy title="Contacto" data={user.contacto} size={4} />
            </Grid>
          </Box>
        </PaperLayout>
      )}
    </>
  );
}

export default DetailUser;
