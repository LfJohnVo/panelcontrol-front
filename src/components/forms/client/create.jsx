import { FormLayout, PaperLayout } from '../../common/layouts';
import { GeneralForm } from '../generalForms';
import { CreateClientModel, CreateClientReset } from '../models/client';
import { Button } from '@mui/material';
import { useCreateClient } from '../../../hooks/clients';

const CreateClientForm = () => {
  const [clientCreated, handleCreate] = useCreateClient();
  CreateClientModel.values = CreateClientReset.values;
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
