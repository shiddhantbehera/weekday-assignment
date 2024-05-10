import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DropdownValues } from "../interface/job-type";

const minExperienceOptions = Array(10)
  .fill(null)
  .map((_, index) => index + 1);
const locationOptions = ["Mumbai", "Delhi", "Bengaluru", "Chennai"];
const roleOptions = ["full stack","frontend", "ios", "android", "tech lead", "backend"];
const minBasePayOptions = Array(20)
  .fill(null)
  .map((_, index) => ({
    value: ((index + 1) * 10).toString(),
    label: `$${((index + 1) * 10).toString()}K`,
  }));

type SelectedFiltersState = {
  minExperience: DropdownValues | null;
  companyName: string;
  location: DropdownValues[];
  role: DropdownValues[];
  minBasePay: DropdownValues | null;
};

type FilterOptionsState = {
  minExperience: DropdownValues[];
  location: DropdownValues[];
  role: DropdownValues[];
  minBasePay: DropdownValues[];
};
type InputParam = string | number;

type ConvertToOptionItems = <T extends InputParam>(
  input: T[] | T
) => DropdownValues[] | DropdownValues;

export type FilterRootState = {
  selected: SelectedFiltersState;
  options: FilterOptionsState;
};


const convertToOptionItems: ConvertToOptionItems = (input) => {
  if (Array.isArray(input)) {
    const options: DropdownValues[] = input.map((item) => ({
      label: item.toString(),
      value: item.toString(),
    }));
    return options;
  }
  return {
    label: input.toString(),
    value: input.toString(),
  } as DropdownValues;
};
const initialState: FilterRootState = {
  selected: {
    minExperience: null,
    companyName: "",
    location: [],
    role: [],
    minBasePay: null,
  },
  options: {
    minExperience: convertToOptionItems(
      minExperienceOptions
    ) as DropdownValues[],
    location: convertToOptionItems(locationOptions) as DropdownValues[],
    role: convertToOptionItems(roleOptions) as DropdownValues[],
    minBasePay: minBasePayOptions,
  },
};
const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setMinExperience: (
      state,
      action: PayloadAction<SelectedFiltersState["minExperience"]>
    ) => {
      state.selected.minExperience = action.payload;
    },
    setCompanyName: (
      state,
      action: PayloadAction<SelectedFiltersState["companyName"]>
    ) => {
      state.selected.companyName = action.payload;
    },
    setLocation: (
      state,
      action: PayloadAction<SelectedFiltersState["location"]>
    ) => {
      state.selected.location = action.payload;
    },
    setRole: (state, action: PayloadAction<SelectedFiltersState["role"]>) => {
      state.selected.role = action.payload;
    },
    setMinBasePay: (
      state,
      action: PayloadAction<SelectedFiltersState["minBasePay"]>
    ) => {
      state.selected.minBasePay = action.payload;
    },
  },
});

export const {
  setMinExperience,
  setCompanyName,
  setLocation,
  setRole,
  setMinBasePay,
} = filterSlice.actions;

export default filterSlice.reducer;
