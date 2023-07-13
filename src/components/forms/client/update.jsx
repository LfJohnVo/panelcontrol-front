import { FormLayout, PaperLayout } from '../../common/layouts';
import { GeneralForm } from '../generalForms';
import { CreateUserModel } from '../models/user';
import { Button } from '@mui/material';
import Loading from '../../common/loading';
import { useUpdateUser, useGetUser } from '../../../hooks/user';

const UpdateClientForm = () => {
  const [clientCreated, handleCreate] = useUpdateUser();
  const [loading, user] = useGetUser();
  CreateUserModel.values = user;
  return (
    <FormLayout open={clientCreated}>
      {loading ? (
        <Loading />
      ) : (
        <PaperLayout>
          <GeneralForm model={CreateUserModel} handleSubmit={handleCreate}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, height: '56px' }}
            >
              GUARDAR
            </Button>
          </GeneralForm>
        </PaperLayout>
      )}
    </FormLayout>
  );
};

export default UpdateClientForm;
