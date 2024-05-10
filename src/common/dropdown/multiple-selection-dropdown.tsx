import {
    Autocomplete,
    AutocompleteProps,
    TextField,
    Chip,
  } from "@mui/material";
import { DropdownValues } from "../../interface/job-type";
  
  interface MultiSelectDropdownProps
    extends Partial<AutocompleteProps<DropdownValues, boolean, boolean, undefined>> {
    value: DropdownValues[];
    options: DropdownValues[];
    placeholder?: string;
    label?: string;
  }
  
  export default function MultiSelectDropdown({
    value,
    options,
    placeholder,
    label,
    ...rest
  }: MultiSelectDropdownProps) {
    return (
      <Autocomplete
        value={value}
        multiple
        options={options}
        getOptionLabel={(option) => option.label}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label ?? ""}
            placeholder={placeholder ?? ""}
          />
        )}
        renderTags={(values, getTagProps) =>
          values.map((item, idx) => (
            <Chip {...item} {...getTagProps({ index: idx })} key={item.value} />
          ))
        }
        sx={{ minWidth: 250 }}
        {...rest}
      />
    );
  }
  