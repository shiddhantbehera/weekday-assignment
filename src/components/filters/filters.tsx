import { Stack, TextField } from "@mui/material";
import Dropdown from "../../common/dropdown/dropdown";
import { useAppDispatch, useAppSelector } from "../../api/hooks";
import { filterOptions, selectedFilters } from "./filter-selectors";
import { setLocation, setMinBasePay, setMinExperience, setRemote, setRole } from "../../api/job-filters";
import MultiSelectDropdown from "../../common/dropdown/multi-drop";
import { useState } from "react";

export default function Filters() {
  const [companyName, setSearchText] = useState("");
  const dispatch = useAppDispatch();
  const { location, minBasePay, remote, role, minExperience } = useAppSelector((state) =>
    selectedFilters(state.filters)
  );
  const { locationOptions, minBasePayOptions, remoteOptions, roleOptions, minExperienceOptions } = useAppSelector((state) =>
    filterOptions(state.filters)
  );

  return (
    <>
      <Stack flexWrap={"wrap"} direction="row" columnGap={2} rowGap={1} useFlexGap>
        <TextField
          placeholder="Search text"
          label="Company Name"
          value={companyName}
          onChange={(e) => setSearchText(e.target.value)}
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
        />
        <MultiSelectDropdown
          value={remoteOptions}
          options={remote}
          label="Remote"
          placeholder="select options"
          onChange={(_, newValues) => {
            if (Array.isArray(newValues)) {
              dispatch(setRemote(newValues));
            } else {
              dispatch(setRemote([]));
            }
          }}
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
        />
      </Stack>
    </>
  );
}
