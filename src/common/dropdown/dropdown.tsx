import { Autocomplete, AutocompleteProps, TextField } from "@mui/material";
import { DropdownValues } from "../../interface/job-type";

interface DropdownProperties
	extends Partial<
		AutocompleteProps<DropdownValues, boolean, boolean, undefined>
	> {
	value: DropdownValues | null;
	options: DropdownValues[];
	placeholder?: string;
	label?: string;
}

export default function Dropdown({
	value,
	options,
	label,
	placeholder,
	...rest
}: DropdownProperties) {
	return (
		<Autocomplete
			value={value}
			options={options}
			renderInput={(params) => (
				<TextField
					{...params}
					label={label ?? ""}
					placeholder={placeholder ?? ""}
				/>
			)}
			sx={{ minWidth: 250 }}
			{...rest}
		/>
	);
}