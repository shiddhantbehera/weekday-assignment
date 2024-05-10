import { Stack, TextField } from "@mui/material";
import Dropdown from "../../common/dropdown/dropdown";
import { useAppDispatch, useAppSelector } from "../../api/hooks";
import { filterOptions, selectedFilters } from "./filter-selectors";
import { setLocation, setMinBasePay, setMinExperience, setRole } from "../../api/job-filters";
import MultiSelectDropdown from "../../common/dropdown/multiple-selection-dropdown";
import { useState } from "react";

export default function Filters() {
  const [companyName, setSearchText] = useState("");
  const dispatch = useAppDispatch();
  const { location, minBasePay, role, minExperience } = useAppSelector((state) =>
    selectedFilters(state.filters)
  );
  const { locationOptions, minBasePayOptions, roleOptions, minExperienceOptions } = useAppSelector((state) =>
    filterOptions(state.filters)
  );

  return (
    <>
      <Stack flexWrap={"wrap"} direction="row" columnGap={3} rowGap={2} useFlexGap>
        <TextField
          placeholder="Search text"
          label="Company Name"
          value={companyName}
          onChange={(e) => setSearchText(e.target.value)}
          size="small"
        />
        <MultiSelectDropdown
          options={roleOptions}
          value={role}
          label="Roles"
          placeholder="Select Roles"
          onChange={(_, newValues) => {
            if (Array.isArray(newValues)) {
              dispatch(setRole(newValues));
            } else {
              dispatch(setRole([]));
            }
          }}
          size="small"
        />
        <Dropdown
          options={minExperienceOptions}
          value={minExperience}
          label="Minimum Experience"
          placeholder="Item select"
          onChange={(_, newValue) => {
            if (newValue !== null && "value" in newValue) {
              dispatch(setMinExperience(newValue));
            } else {
              dispatch(setMinExperience(null));
            }
          }}
          size="small"
        />
        <Dropdown
          value={minBasePay}
          options={minBasePayOptions}
          label="Minimum Base Pay Salary"
          placeholder="Item select"
          onChange={(_, newValue) => {
            if (newValue !== null && "value" in newValue) {
              dispatch(setMinBasePay(newValue));
            } else {
              dispatch(setMinBasePay(null));
            }
          }}
          size="small"
        />
        <MultiSelectDropdown
          value={location}
          options={locationOptions}
          label="Location"
          placeholder="Select location..."
          onChange={(_, newValues) => {
            if (Array.isArray(newValues)) {
              dispatch(setLocation(newValues));
            } else {
              dispatch(setLocation([]));
            }
          }}
          size="small"
        />
      </Stack>
    </>
  );
}
