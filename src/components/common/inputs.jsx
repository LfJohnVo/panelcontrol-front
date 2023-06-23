import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useCallback, useState } from "react";
import { Fragment } from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";

export const SelectInput = ({ name, data, value, setValue }) => {
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  });

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{name}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={name}
        onChange={handleChange}
      >
        {data.map((item, index) => {
          return (
            <MenuItem key={index} value={item.id}>
              {item.name || item.title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export const MultiSelect = ({
  name,
  data,
  values,
  setValues,
  handleDelete,
}) => {
  const [value, setValue] = useState("");

  const handelSelect = useCallback((value) => {
    const result = data.filter((item) => item.id == value);
    const result2 = values.filter((item) => item.id == result[0].id);
    if (result2.length <= 0) {
      setValues([...values, result[0]]);
    }
  });

  return (
    <Fragment>
      <SelectInput
        name={name}
        data={data}
        value={value}
        setValue={handelSelect}
      />
      {values.map((item, index) => {
        return (
          <Chip
            key={index}
            id={index}
            label={item.title}
            style={{
              marginTop: "10px",
              marginRight: "5px",
            }}
            onDelete={handleDelete(item)}
          />
        );
      })}
    </Fragment>
  );
};

export const TextInput = ({ name, register, errors, options }) => {
  return (
    <FormControl fullWidth>
      <TextField
        label={name}
        name={name}
        variant="outlined"
        {...register(name, options)}
        error={!!errors?.title}
        helperText={errors?.title ? errors.title.message : null}
        fullWidth
      />
    </FormControl>
  );
};
