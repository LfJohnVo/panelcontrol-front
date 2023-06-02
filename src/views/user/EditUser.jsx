import React from "react";
import { Container, Grid } from "@mui/material";
import FormEditUser from "../../components/users/FormEditUser";
import { titleModulUser } from "../../common/text/TextTitle";
function EditUser() {
  const props = {
    navigateLink: "/users",
    title: titleModulUser.titleUserEdit,
    text: titleModulUser.descriptionUserEdit,
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3} rowSpacing={0}>
          <Grid item xs={12} md={12} lg={12}>
            <FormEditUser {...props} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default EditUser;
