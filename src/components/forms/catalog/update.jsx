import { FormLayout, PaperLayout } from '../../common/layouts';
import { GeneralForm } from '../generalForms';
import { CreateCatalogModel } from '../models/catalog';
import { Button } from '@mui/material';
import Loading from '../../loading/Loading';
import { useUpdateCatalog, useGetCatalog } from '../../../hooks/catalogs';

const UpdateCatalogForm = () => {
  const [catalogCreated, handleUpdate] = useUpdateCatalog();
  const [loading, catalog] = useGetCatalog();
  CreateCatalogModel.values = catalog;
  return (
    <FormLayout open={catalogCreated}>
      {loading ? (
        <Loading />
      ) : (
        <PaperLayout>
          <GeneralForm model={CreateCatalogModel} handleSubmit={handleUpdate}>
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

export default UpdateCatalogForm;
