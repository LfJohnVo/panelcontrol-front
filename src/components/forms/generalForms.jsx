import { Box } from '@mui/material';
import { useValidate } from '../../hooks';
import { InputMaker } from '../common/inputs';

export const GeneralForm = ({ children, model, handleSubmit }) => {
  const formik = useValidate(model.values, handleSubmit, model.validate);
  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      {model.form.map((item, index) => {
        return (
          <InputMaker
            key={index}
            type={item.type}
            name={item.name}
            label={item.label}
            placeholder={item.placeholder}
            value={formik.values[item.name]}
            error={formik.errors[item.name]}
            onChange={formik.handleChange}
          />
        );
      })}
      {children}
    </Box>
  );
};
