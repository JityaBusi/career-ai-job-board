import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { api } from "./services/api";

export default function App() {
  const [savedJobs, setSavedJobs] =
    useState<number[]>([]);

  useEffect(() => {
    const fetchSavedJobs =
      async () => {
        const token =
          localStorage.getItem(
            "token"
          );

        if (!token) return;

        try {
          const res =
            await api.get(
              "/saved-jobs",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

          setSavedJobs(
            res.data.map(
              (saved: any) =>
                saved.jobId
            )
          );
        } catch (error) {
          console.error(error);
        }
      };

    fetchSavedJobs();
  }, []);

  const toggleSaveJob = (
    id: number
  ) => {
    setSavedJobs((prev) =>
      prev.includes(id)
        ? prev.filter(
            (jobId) =>
              jobId !== id
          )
        : [...prev, id]
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/"
          element={
            <Jobs
              savedJobs={
                savedJobs
              }
              toggleSaveJob={
                toggleSaveJob
              }
            />
          }
        />

        <Route
          path="/job/:id"
          element={
            <JobDetails
              savedJobs={
                savedJobs
              }
              toggleSaveJob={
                toggleSaveJob
              }
            />
          }
        />

        <Route
          path="/dashboard"
          element={
            <Dashboard />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}