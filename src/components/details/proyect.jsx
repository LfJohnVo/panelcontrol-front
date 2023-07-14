import React from 'react';
import { PaperLayout } from '../common/layouts';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { DetailTypografy } from '../common/typografy';
import Loading from '../common/loading';
import { useGetCatalog } from '../../hooks/catalogs';

function DetailCatalog() {
  const [loading, catalog] = useGetCatalog();
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
                Proyecto
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
              <DetailTypografy title="Nombre" data={catalog.title} size={4} />
              <DetailTypografy
                title="URL del proyecto"
                data={catalog.url_base}
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
                Modulos
              </Typography>
            </Grid>
            <Grid
              container
              item
              spacing={2}
              md={12}
              direction="row"
              justifyContent="flex-start"
              sx={{ mb: '80px', pl: '39px', pr: '146px' }}
            >
              {catalog.modulos &&
                catalog.modulos.map(item => {
                  return (
                    <Grid
                      container
                      item
                      spacing={2}
                      md={12}
                      direction="row"
                      justifyContent="flex-start"
                      sx={{ mb: '10px', pl: '39px', pr: '146px' }}
                      key={item.id}
                    >
                      <DetailTypografy
                        title="Nombre"
                        data={item.title}
                        size={4}
                      />
                      <DetailTypografy
                        title="URL del modulo"
                        data={item.url}
                        size={4}
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

export default DetailCatalog;
