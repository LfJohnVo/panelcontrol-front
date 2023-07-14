import { FormLayout, PaperLayout } from '../../common/layouts';
import { GeneralForm } from '../generalForms';
import { Button } from '@mui/material';
import { CreateCatalogModel, CreateCatalogReset } from '../models/catalog';
import { useCreateCatalog } from '../../../hooks/catalogs';

const CreateCatalogForm = () => {
  const [catalogCreated, handleCreate] = useCreateCatalog();
  CreateCatalogModel.values = CreateCatalogReset.values;
  return (
    <FormLayout open={catalogCreated}>
      <PaperLayout>
        <GeneralForm model={CreateCatalogModel} handleSubmit={handleCreate}>
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

export default CreateCatalogForm;
