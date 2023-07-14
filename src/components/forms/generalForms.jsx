import { Box, Grid } from '@mui/material';
import { useCallbackCreator, useValidate } from '../../hooks/generals';
import { InputMaker } from '../common/inputs';

export const GeneralForm = ({ children, model, handleSubmit }) => {
  const formik = useValidate(model.values, handleSubmit, model.validate);
  const handleChange = useCallbackCreator(
    (index, item, e) => {
      switch (item.type) {
        case 'multiplechip':
          formik.setFieldValue(item.name, e);
          break;
        case 'select':
          if (item.depends) {
            item.callback(item, e);
          }
          formik.handleChange(e);
          break;
        case 'checkbox':
          formik.setFieldValue(item.name, e);
          break;
        default:
          formik.handleChange(e);
          break;
      }
    },
    [model.form]
  );
  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        width: '100%',
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
        }}
      >
        {model.form.map((item, index) => {
          if (item.type == 'row') {
            return (
              <Grid
                item
                key={`row-${index}`}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                }}
              >
                {item.items.map((itm, index) => {
                  return (
                    <Grid
                      item
                      xs={itm.size}
                      key={`element-${index}`}
                      sx={{
                        margin: '5px',
                      }}
                    >
                      <InputMaker
                        key={`element-${index}-input`}
                        type={itm.type}
                        name={itm.name}
                        label={itm.label}
                        placeholder={itm.placeholder}
                        value={formik.values[itm.name]}
                        error={formik.errors[itm.name]}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            );
          }
          return (
            <Grid
              item
              xs={12}
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
              }}
            >
              <InputMaker
                key={index}
                id={index}
                type={item.type}
                name={item.name}
                label={item.label}
                placeholder={item.placeholder}
                value={formik.values[item.name]}
                error={formik.errors[item.name]}
                onChange={handleChange(index, item)}
                arrayInputs={item?.arrayInputs}
                items={item?.items}
              />
            </Grid>
          );
        })}
      </Grid>
      {children}
    </Box>
  );
};
