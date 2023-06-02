import React from "react";
import { Container, Grid } from "@mui/material";
import FormUser from "../../components/users/FormUser";
import { titleModulUser } from "../../common/text/TextTitle";

function UserCreate() {
  const props = {
    navigateLink: "/users",
    title: titleModulUser.titleUserCreate,
    text: titleModulUser.descriptionUserCreate,
  };
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3} rowSpacing={0}>
          <Grid item xs={12} md={12} lg={12}>
            <FormUser {...props} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default UserCreate;
