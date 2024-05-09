import { Typography, Box } from "@mui/material";

interface RequiredExperienceProps {
  minimumYears: number | null;
}

export default function RequiredExperience({
  minimumYears,
}: RequiredExperienceProps) {
  return (
    <Box>
      <Typography variant="overline">Minimum Experience</Typography>
      <Typography>{minimumYears ?? "-"} Years</Typography>
    </Box>
  );
}
