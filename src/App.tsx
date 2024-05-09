import Container from "@mui/material/Container";
import { Stack } from "@mui/material";
import JobList from "./components/job-list/jobList";
import Filters from "./components/filters/filters";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./api/store";

function App() {
  return (
    <ReduxProvider store={store}>
        <Container>
          <Stack rowGap={4} width="100%">
            <Filters />
            <JobList />
          </Stack>
        </Container>
    </ReduxProvider>
  );
}

export default App;