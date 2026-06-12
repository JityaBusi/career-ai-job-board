import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Jobs />}
        />

        <Route
          path="/job/:id"
          element={<JobDetails />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}