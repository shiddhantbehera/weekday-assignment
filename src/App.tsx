import Container from "@mui/material/Container";
import { Stack, ThemeProvider } from "@mui/material";
import JobList from "./components/job-list/job-list";
import Filters from "./components/filters/filters";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./api/store";
import { theme } from "./theme";

function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <Container>
          <Stack rowGap={4} width="100%">
            <Filters />
            <JobList />
          </Stack>
        </Container>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;