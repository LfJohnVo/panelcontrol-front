import { useState, useCallback } from 'react';
import {
  Input,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  FormControl,
  FormHelperText,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

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
    <FormControl sx={{ m: 1 }}>
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
    <FormControl sx={{ m: 1 }} variant="standard">
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

export const InputMaker = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
  values = [],
  label,
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
