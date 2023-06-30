import { Box, Grid } from '@mui/material';
import { useValidate } from '../../hooks/generals';
import { InputMaker } from '../common/inputs';

export const GeneralForm = ({ children, model, handleSubmit }) => {
  const formik = useValidate(model.values, handleSubmit, model.validate);
  return (
    <Box>
      <Box component="form" onSubmit={formik.handleSubmit}>
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
                  type={item.type}
                  name={item.name}
                  label={item.label}
                  placeholder={item.placeholder}
                  value={formik.values[item.name]}
                  error={formik.errors[item.name]}
                  onChange={formik.handleChange}
                />
              </Grid>
            );
          })}
        </Grid>
        {children}
      </Box>
    </Box>
  );
};
