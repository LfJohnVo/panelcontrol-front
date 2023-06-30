import React from 'react';
import { Container, Grid } from '@mui/material';
import FormEditCatalogo from '../../components/catalogo/FormEditCatalogo';
import { titleModulCatalogo } from '../../common/text/TextTitle';
function EditCatalogo() {
  const props = {
    navigateLink: '/catalogo',
    title: titleModulCatalogo.titleCatalogoList,
    text: titleModulCatalogo.descriptionCatalogoList,
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3} rowSpacing={0}>
          <Grid item xs={12} md={12} lg={12}>
            <FormEditCatalogo {...props} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default EditCatalogo;
