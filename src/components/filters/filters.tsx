import { useState } from "react";
import { Stack, TextField } from "@mui/material";
import Dropdown from "../../common/dropdown/dropdown";
import { DropdownValues } from "../../interface/job-details";

const defaultOpts: DropdownValues[] = [{ item: "TEST", value: "1" }];

export default function Filters() {
  const [searchText, setSearchText] = useState("");
  const [Selection, setSelection] = useState<DropdownValues | null>(
    null
  );

  return (
    <>
      <Stack flexWrap={"wrap"} direction="row" columnGap={2} rowGap={1}>
        <TextField
          placeholder="Search text"
          label="Company Name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Dropdown
          options={defaultOpts}
          value={Selection}
          label="Roles"
          placeholder="Item select"
          onChange={(_, newValue) => {
            if (newValue !== null && "value" in newValue) {
              setSelection(newValue);
            } else {
              setSelection(null);
            }
          }}
        />
        <Dropdown
          options={defaultOpts}
          value={Selection}
          label="Number of Employees"
          placeholder="Item select"
          onChange={(_, newValue) => {
            if (newValue !== null && "value" in newValue) {
              setSelection(newValue);
            } else {
              setSelection(null);
            }
          }}
        />
        <Dropdown
          options={defaultOpts}
          value={Selection}
          label="Remote"
          placeholder="Item select"
          onChange={(_, newValue) => {
            if (newValue !== null && "value" in newValue) {
              setSelection(newValue);
            } else {
              setSelection(null);
            }
          }}
        />
        <Dropdown
          options={defaultOpts}
          value={Selection}
          label="Minimu Base Pay Salary"
          placeholder="Item select"
          onChange={(_, newValue) => {
            if (newValue !== null && "value" in newValue) {
              setSelection(newValue);
            } else {
              setSelection(null);
            }
          }}
        />
      </Stack>
    </>
  );
}
