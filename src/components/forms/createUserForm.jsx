import { FormLayout, PaperLayout } from '../common/layouts';
import { GeneralForm } from './generalForms';
import { CreateUserModel } from '../../app/forms';
import { Button } from '@mui/material';
import { useCreateUser } from '../../hooks/user';

const CreateUserForm = () => {
  const [clientCreated, handleCreate] = useCreateUser();
  return (
    <FormLayout open={clientCreated}>
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
    </FormLayout>
  );
};

export default CreateUserForm;
