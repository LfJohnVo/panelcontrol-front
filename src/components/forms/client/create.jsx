import { FormLayout, PaperLayout } from '../../common/layouts';
import { GeneralForm } from '../generalForms';
import { CreateClientModel } from '../models/client';
import { Button } from '@mui/material';
import { useCreateClient } from '../../../hooks/clients';

const CreateClientForm = () => {
  const [clientCreated, handleCreate] = useCreateClient();
  return (
    <FormLayout open={clientCreated}>
      <PaperLayout>
        <GeneralForm model={CreateClientModel} handleSubmit={handleCreate}>
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

export default CreateClientForm;
