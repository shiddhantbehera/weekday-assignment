import { createSelector } from "@reduxjs/toolkit"
import { FilterRootState } from "../../api/job-filters"

export const selectedFilters = createSelector([
    (state: FilterRootState) => state.selected.companyName,
    (state: FilterRootState) => state.selected.location,
    (state: FilterRootState) => state.selected.minBasePay,
    (state: FilterRootState) => state.selected.minExperience,
    (state: FilterRootState) => state.selected.role,
  ], (companyName, location, minBasePay, minExperience, role) => 
    ({
      companyName,
      location,
      minBasePay,
      minExperience,
      role
    })
  )
  
  export const filterOptions = createSelector([
    (state: FilterRootState) => state.options.location,
    (state: FilterRootState) => state.options.minBasePay,
    (state: FilterRootState) => state.options.minExperience,
    (state: FilterRootState) => state.options.role,
  ], (
    location,minBasePay,minExperience,role
  ) => ({
    locationOptions: location,
    minBasePayOptions: minBasePay,
    minExperienceOptions: minExperience,
    roleOptions: role
  }))