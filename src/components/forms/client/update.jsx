import { FormLayout, PaperLayout } from '../../common/layouts';
import { GeneralForm } from '../generalForms';
import { Button } from '@mui/material';
import Loading from '../../common/loading';
import { useGetClient, useUpdateClient } from '../../../hooks/clients';
import { CreateClientModel } from '../models/client';

const UpdateClientForm = () => {
  const [clientCreated, handleCreate] = useUpdateClient();
  const [loading, client] = useGetClient();
  CreateClientModel.values = client;
  return (
    <FormLayout open={clientCreated}>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </FormLayout>
  );
};

export default UpdateClientForm;
