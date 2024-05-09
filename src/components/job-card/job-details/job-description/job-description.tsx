import { useState } from "react";
import { Typography, Box, Collapse, Link } from "@mui/material";

interface JobDescriptionProps {
  description: string;
}

export default function JobDescription({ description }: JobDescriptionProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <Box>
      <Typography variant="h6" fontWeight="bold">
        About Company:
      </Typography>
      <Collapse in={expanded} collapsedSize={200} timeout={"auto"}>
        <Typography variant="body2">{description}</Typography>
      </Collapse>
      <Link onClick={toggleExpanded} variant="button">
        {!expanded ? "View Job" : "Collapse"}
      </Link>
    </Box>
  );
}
