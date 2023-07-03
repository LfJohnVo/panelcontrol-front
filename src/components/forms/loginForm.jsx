import { useLogin } from '../../hooks';
import { FormLayout } from '../common/layouts';
import { Grid, Box, Typography, Button, Link } from '@mui/material';
import { GeneralForm } from './generalForms';
import { SignInModel } from './models/generals';

/**
 *
 * @returns
 */
const LoginForm = () => {
  const [handleSubmit, loading] = useLogin();

  return (
    <FormLayout open={loading}>
      <Box
        sx={{
          mx: 9,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          INICIAR SESIÓN
        </Typography>
        <GeneralForm model={SignInModel} handleSubmit={handleSubmit}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, height: '56px' }}
          >
            ENTRAR
          </Button>
        </GeneralForm>
        <Grid container>
          <Grid item>
            <Link href="#" variant="body2">
              He olvidado mi contraseña
            </Link>
          </Grid>
        </Grid>
      </Box>
    </FormLayout>
  );
};

export default LoginForm;
