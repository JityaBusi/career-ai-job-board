import { useState } from "react";
import JobCard from "@/components/jobs/JobCard";
import SearchBar from "@/components/jobs/SearchBar";
import FilterSidebar from "@/components/jobs/FilterSidebar";
import Navbar from "@/components/Navbar";

import { Card } from "@/components/ui/card";
import { jobs } from "@/data/jobs";

export default function Jobs() {
  const [search, setSearch] = useState("");
  const [remoteOnly, setRemoteOnly] = useState(false);
    const [savedJobs, setSavedJobs] =
  useState<number[]>([]);

const toggleSaveJob = (id: number) => {
  setSavedJobs((prev) =>
    prev.includes(id)
      ? prev.filter((jobId) => jobId !== id)
      : [...prev, id]
  );
};
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      `${job.title} ${job.company} ${job.skills.join(" ")}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesRemote =
      !remoteOnly || job.location === "Remote";

    return matchesSearch && matchesRemote;
    
  });

  return (
    <>
      
      <Navbar savedCount={savedJobs.length} />

      <div className="max-w-7xl mx-auto p-6">
        {/* Hero Section */}
        {/* Hero Section */}
          <div className="text-center py-20">
            <div className="inline-flex items-center rounded-full border px-4 py-2 mb-6 text-sm">
              🚀 AI-Powered Career Platform
            </div>

            <h1 className="text-6xl font-bold mb-6">
              Land Your Dream Job

              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Search jobs, analyze resumes, generate cover
              letters, and prepare for interviews with
              intelligent AI assistance.
            </p>
          </div>


        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <Card className="p-6 text-center">
            <h2 className="text-3xl font-bold">10K+</h2>
            <p>Jobs</p>
          </Card>

          <Card className="p-6 text-center">
            <h2 className="text-3xl font-bold">500+</h2>
            <p>Companies</p>
          </Card>

          <Card className="p-6 text-center">
            <h2 className="text-3xl font-bold">50K+</h2>
            <p>Applicants</p>
          </Card>
        </div>

        {/* Search */}
        <div className="mb-8">
          <SearchBar
            value={search}
            onChange={setSearch}
          />
        </div>

        {/* Job Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredJobs.length} jobs found
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div>
            <FilterSidebar
              remoteOnly={remoteOnly}
              setRemoteOnly={setRemoteOnly}
            />
          </div>

          {/* Jobs */}
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
                    experience={job.experience}
                    skills={job.skills}
                    savedJobs={savedJobs}
                    toggleSaveJob={toggleSaveJob}
                    />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}