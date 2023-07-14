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
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useCallbackCreator } from '../../hooks/generals';

/**
 * Usa este componente para renderizar un input del
 * tipo texto
 *
 * @param {String} name
 * @param {String} variant
 * @param {State} error
 * @param {State} value
 * @param {Callback} onChange
 * @param {String} placeholder
 * @param {String} label
 * @returns
 */
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

/**
 * Implementa este componente para renderizar un input del
 * tipo password
 *
 * @param {State} values
 * @param {String} name
 * @param {Callback} onChange
 * @param {State} error
 * @returns
 */
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

/**
 *  Usa este componente para renderizar un selector tipo
 *  Chip que implemnenta 1 o n inputs de configuracion
 *
 * @param {Callback} onChange
 * @param {Array} arrayInput
 * @returns
 */
export const MultipleChip = ({ onChange, arrayInputs, value1 }) => {
  const [values, setValues] = useState(value1 || []);
  const [value, setValue] = useState(arrayInputs.values || []);

  const handleChange = useCallback(e => {
    setValue({ ...value, [e.target.id]: e.target.value });
  });

  const handleClick = useCallback(() => {
    if (value.title != '' && value.url != '') {
      setValues([...values, value]);
      onChange([...values, value]);
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

/**
 * Usa este componente para renderizar un input del tipo select
 *
 * @param {State} value
 * @param {Callback} onChange
 * @param {Array} items
 * @param {String} name
 * @param {String} label
 * @param {String} id
 * @returns
 */
export const SelectInput = ({ value, onChange, items, name, label, id }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={name}>{label}</InputLabel>
      <Select
        value={value || ''}
        label={label}
        onChange={onChange}
        name={name}
        labelId={name}
        id={id}
      >
        {items.map((item, index) => {
          return (
            <MenuItem key={index} value={item?.id || ''}>
              {item?.name || item?.title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

/**
 * Usa este componente para renderizar un componente del tipo checkbox
 *
 * @param {String} label
 * @param {Array} items
 * @param {Callback} onChange
 * @param {String} name
 * @returns
 */
export const CheckboxInput = ({ label, items, onChange, name }) => {
  const [values, setValues] = useState([]);

  const handleCheck = useCallbackCreator(
    (index, item) => {
      const newValues = [...values, item];
      setValues(newValues);
      onChange(newValues);
    },
    [items, values]
  );
  return (
    <FormControl label={label}>
      <FormGroup>
        {items.map((item, index) => {
          return (
            <FormControlLabel
              control={<Checkbox onChange={handleCheck(index, item)} />}
              label={item.title}
            />
          );
        })}
      </FormGroup>
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
  items = [],
  label,
  arrayInputs,
  id,
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
      return (
        <SelectInput
          value={value}
          onChange={onChange}
          items={items}
          name={name}
          label={label}
          id={id}
        />
      );
    case 'date':
      return <div>Aqui</div>;
    case 'checkbox':
      return (
        <CheckboxInput
          value={value}
          onChange={onChange}
          items={items}
          name={name}
          label={label}
          id={id}
        />
      );
    case 'multiplechip':
      return (
        <MultipleChip
          onChange={onChange}
          arrayInputs={arrayInputs}
          value1={value}
          name={name}
        />
      );
  }
};
