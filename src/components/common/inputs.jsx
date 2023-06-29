import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState, Fragment } from "react";

export const TextInput = ({
  title,
  name,
  variant,
  register,
  errors,
  options,
}) => {
  return (
    <TextField
      label={title}
      name={name}
      fullWidth
      variant={variant || "outlined"}
      {...register(name, options)}
      error={!!errors?.[name]}
      helperText={errors?.[name] ? errors?.[name].message : null}
    />
  );
};

export const InputPassword = ({ name, variant, register, errors, options }) => {
  const [showPassword, setShowPassword] = useState();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <FormControl
        variant={variant || "outlined"}
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
          type={showPassword ? "text" : "password"}
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

export const SelectInput = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};
