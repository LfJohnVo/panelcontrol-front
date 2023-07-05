import { useState, useCallback } from 'react';
import {
  Input,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  FormControl,
  FormHelperText,
  Chip,
  Grid,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useCallbackCreator } from '../../hooks/generals';

export const TextInput = ({
  name,
  variant = null,
  error,
  value,
  onChange,
  placeholder,
  label,
}) => {
  return (
    <FormControl sx={{ m: 1 }} fullWidth>
      <TextField
        id={name}
        label={label}
        name={name}
        fullWidth
        variant={variant || 'standard'}
        value={value}
        error={error}
        onChange={onChange}
        placeholder={placeholder}
      />
      <FormHelperText>{error || null}</FormHelperText>
    </FormControl>
  );
};
export const PasswordInput = ({ value, name, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = useCallback(() => {
    setShowPassword(true);
  });
  const handleMouseDownPassword = useCallback(() => {
    setShowPassword(false);
  });
  return (
    <FormControl sx={{ m: 1 }} variant="standard" fullWidth>
      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
      <Input
        id={name}
        type={showPassword ? 'text' : 'password'}
        value={value}
        name={name}
        onChange={onChange}
        error={error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText>{error || null}</FormHelperText>
    </FormControl>
  );
};

export const InputChip = ({
  name,
  variant = null,
  value,
  onChange,
  placeholder,
  label,
  onClick,
  onClick2,
  onDelete,
  chip,
}) => {
  return (
    <FormControl sx={{ m: 1 }} fullWidth>
      <TextField
        label={label}
        name={name}
        value={value}
        variant={variant || 'standard'}
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={onClick}>
                <AddCircleOutlineOutlinedIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {chip.map((chip, index) => (
        <Chip
          key={index}
          label={chip.title}
          style={{
            marginTop: '10px',
            marginRight: '5px',
          }}
          onDelete={onDelete(chip)}
          onClick={onClick2}
        />
      ))}
    </FormControl>
  );
};

export const MultipleChip = ({ onChange, arrayInputs }) => {
  const [values, setValues] = useState([]);
  const [value, setValue] = useState(arrayInputs.values);

  const handleChange = useCallback(e => {
    setValue({ ...value, [e.target.id]: e.target.value });
  });

  const handleClick = useCallback(() => {
    if (value.title != '' && value.url != '') {
      setValues([...values, value]);
      onChange('modules', [...values, value]);
      setValue(arrayInputs.values);
    }
  });

  const handleAdd = useCallbackCreator(
    index => {
      const elements = values.filter(item => {
        return values.indexOf(item) != index;
      });
      setValues(elements);
    },
    [values]
  );

  return (
    <FormControl fullWidth>
      {arrayInputs.inputs.map((input, index) => {
        return (
          <TextInput
            key={index}
            id={input.name}
            name={input.name}
            error={false}
            value={value[input.name]}
            onChange={handleChange}
            placeholder={input.placeholder}
            label={input.label}
          />
        );
      })}
      <Grid
        container
        spacing={2}
        xs={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
        }}
      >
        <Grid item xs={2}>
          <IconButton onClick={handleClick}>
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
        </Grid>
        <Grid item xs={8}>
          {values.map((chip, index) => (
            <Chip
              id={index}
              key={index}
              label={chip.title}
              style={{
                marginTop: '10px',
                marginRight: '5px',
              }}
              onDelete={handleAdd(index)}
            />
          ))}
        </Grid>
      </Grid>
    </FormControl>
  );
};

export const InputMaker = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
  values = [],
  label,
  arrayInputs,
}) => {
  switch (type) {
    case 'text':
      return (
        <TextInput
          name={name}
          error={error}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          label={label}
        />
      );
    case 'password':
      return (
        <PasswordInput
          value={value}
          name={name}
          onChange={onChange}
          error={error}
        />
      );
    case 'select':
      return <div>Test</div>;
    case 'date':
      return <div>Aqui</div>;
    case 'chip':
      return <div>Chip</div>;
    case 'multiplechip':
      return (
        <MultipleChip
          onChange={onChange}
          arrayInputs={arrayInputs}
          value={value}
          name={name}
        />
      );
  }
};

export const SelectInput = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};

export const InputPassword = ({ name, variant, register, errors, options }) => {
  const [showPassword, setShowPassword] = useState();
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <FormControl
        variant={variant || 'outlined'}
        fullWidth
        {...register(name, options)}
        error={!!errors?.[name]}
        helpertext={errors?.[name] ? errors?.[name].message : null}
      >
        <InputLabel htmlFor="outlined-adornment-password">{name}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          label={name}
          name={name}
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText>
          {errors?.[name] ? options.required : null}
        </FormHelperText>
      </FormControl>
    </Fragment>
  );
};
