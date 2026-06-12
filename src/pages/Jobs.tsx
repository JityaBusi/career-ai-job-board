import { useEffect, useState } from "react";

import JobCard from "@/components/jobs/JobCard";
import SearchBar from "@/components/jobs/SearchBar";
import FilterSidebar from "@/components/jobs/FilterSidebar";
import Navbar from "@/components/Navbar";

import { Card } from "@/components/ui/card";

import { api } from "@/services/api";
import type { Job } from "@/types/job";

type Props = {
  savedJobs: number[];
  toggleSaveJob: (id: number) => void;
};

export default function Jobs({
  savedJobs,
  toggleSaveJob,
}: Props) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [remoteOnly, setRemoteOnly] =
    useState(false);

  const [experience, setExperience] =
    useState("");

  const [jobType, setJobType] =
    useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response =
          await api.get("/jobs");

        setJobs(response.data);
      } catch (error) {
        console.error(
          "Failed to fetch jobs:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      `${job.title} ${job.company}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesRemote =
      !remoteOnly ||
      job.location === "Remote";

    const matchesExperience =
      !experience ||
      job.experience === experience;

    const matchesJobType =
      !jobType ||
      job.jobType === jobType;

    return (
      matchesSearch &&
      matchesRemote &&
      matchesExperience &&
      matchesJobType
    );
  });

  if (loading) {
    return (
      <>
        <Navbar
          savedCount={savedJobs.length}
        />

        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">
              Loading Jobs...
            </h2>

            <p className="text-muted-foreground">
              Fetching opportunities from
              database
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar savedCount={savedJobs.length} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Hero Section */}
<div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white p-10 md:p-14 mb-10">

  {/* Background Effects */}
  <div className="absolute top-0 left-1/4 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl" />
  <div className="absolute right-1/4 bottom-0 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />
  <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />

  <div className="relative z-10 text-center">

    {/* Badge */}
    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 mb-6 text-sm backdrop-blur">
      🚀 Trusted by 50,000+ Job Seekers
    </div>

    {/* Heading */}
    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
      Get Hired With
      <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        AI-Powered Career Tools
      </span>
    </h1>

    {/* Description */}
    <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8">
      Discover opportunities, analyze resumes,
      generate personalized cover letters,
      and prepare for interviews with intelligent
      AI assistance designed to accelerate your career.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
      <button
        className="
          px-7 py-3
          rounded-xl
          bg-gradient-to-r
          from-indigo-500
          to-purple-500
          font-semibold
          shadow-lg
          hover:scale-105
          transition
        "
      >
        Find Jobs
      </button>

      <button
        className="
          px-7 py-3
          rounded-xl
          border
          border-white/20
          bg-white/10
          backdrop-blur
          hover:bg-white/20
          transition
        "
      >
        Analyze Resume
      </button>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
      <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
        <h3 className="text-2xl font-bold text-blue-400">
          10K+
        </h3>
        <p className="text-sm text-slate-400">
          Active Jobs
        </p>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
        <h3 className="text-2xl font-bold text-purple-400">
          500+
        </h3>
        <p className="text-sm text-slate-400">
          Companies
        </p>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
        <h3 className="text-2xl font-bold text-pink-400">
          50K+
        </h3>
        <p className="text-sm text-slate-400">
          Professionals
        </p>
      </div>
    </div>
  </div>
</div>
          {/* Search */}
          <div className="mb-8 rounded-2xl border bg-card p-4 shadow-sm">
            <SearchBar
              value={search}
              onChange={setSearch}
            />
          </div>

          {/* Results Count */}
          <div className="mb-8 flex justify-between items-center">
            <p className="text-muted-foreground">
              {filteredJobs.length}
              {" "}opportunities found
            </p>
          </div>

          {/* Header */}
          <div className="mb-8">
            <p className="text-indigo-600 font-semibold">
              Explore Opportunities
            </p>

            <h2 className="text-4xl font-bold mt-2">
              Featured Jobs
            </h2>
          </div>

          {/* Layout */}
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <FilterSidebar
                remoteOnly={remoteOnly}
                setRemoteOnly={
                  setRemoteOnly
                }
                experience={experience}
                setExperience={
                  setExperience
                }
                jobType={jobType}
                setJobType={setJobType}
              />
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    salary={job.salary}
                    experience={
                      job.experience
                    }
                    jobType={
                      job.jobType
                    }
                    skills={[]}
                    savedJobs={
                      savedJobs
                    }
                    toggleSaveJob={
                      toggleSaveJob
                    }
                  />
                ))}
              </div>

              {filteredJobs.length ===
                0 && (
                <Card className="p-10 text-center mt-6">
                  <h3 className="text-xl font-semibold mb-2">
                    No jobs found
                  </h3>

                  <p className="text-muted-foreground">
                    Try adjusting your
                    search or filters.
                  </p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}