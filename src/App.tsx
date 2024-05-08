import Container from "@mui/material/Container";
import { Stack } from "@mui/material";
import JobList from "./components/job-list/jobList";
import Filters from "./components/filters/filters";
import { jobList } from "./sample-data";

export default function App() {
  return (
      <Container>
        <Stack rowGap={4} width="100%">
          <Filters />
          <JobList jobs={jobList} />
        </Stack>
      </Container>
  );
}
