import { FormLayout, PaperLayout } from '../../common/layouts';
import { GeneralForm } from '../generalForms';
import { Button } from '@mui/material';
import { useCreateUser } from '../../../hooks/user';
import { useGetClients } from '../../../hooks/clients';
import { useGetCatalogs } from '../../../hooks/catalogs';
import { CreateAcquisitionModel } from '../models/acquisition';
import { useCallback, useState } from 'react';

const CreateAcquisitionForm = () => {
  const [clientCreated, handleCreate] = useCreateUser();
  const [loadingClientes, clients, handleGetClients] = useGetClients();
  const [loadingCatalog, catalogs, handleGetCatalogs] = useGetCatalogs();
  const [modules, setModules] = useState([]);

  CreateAcquisitionModel.form[0].items = clients;
  CreateAcquisitionModel.form[1].items = catalogs;
  CreateAcquisitionModel.form[2].items = modules;

  const handleChangeProject = useCallback((project, e) => {
    const findProject = project.items.filter(
      item => item.id === e.target.value
    );
    setModules(findProject[0].modulos);
  });

  CreateAcquisitionModel.form[1].callback = handleChangeProject;

  return (
    <FormLayout open={clientCreated}>
      <PaperLayout loading={loadingCatalog && loadingClientes}>
        <GeneralForm model={CreateAcquisitionModel} handleSubmit={handleCreate}>
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

export default CreateAcquisitionForm;
