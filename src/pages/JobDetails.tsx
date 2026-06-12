import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import { api } from "@/services/api";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import ResumeAnalyzer from "@/components/ai/ResumeAnalyzer";
import CoverLetterGenerator from "@/components/ai/CoverLetterGenerator";
import InterviewPrep from "@/components/ai/InterviewPrep";

import {
  MapPin,
  Briefcase,
  IndianRupee,
} from "lucide-react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  experience: string;
  jobType: string;
  description: string;
  skills: string[];
};

type Props = {
  savedJobs: number[];
  toggleSaveJob: (id: number) => void;
};

export default function JobDetails({
  savedJobs,
  toggleSaveJob,
}: Props) {
  const { id } = useParams();

  const [job, setJob] =
    useState<Job | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await api.get(
          `/jobs/${id}`
        );

        setJob(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="p-10 text-center">
        Loading...
      </div>
    );
  }

  if (!job) {
    return (
      <div className="p-10 text-center">
        Job Not Found
      </div>
    );
  }

  const isSaved = savedJobs.includes(
    job.id
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <Card className="p-8 border-0 shadow-xl mb-8">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center text-2xl font-bold mb-4">
                {job.company[0]}
              </div>

              <h1 className="text-4xl font-bold mb-2">
                {job.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                {job.company}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {job.location}
                </div>

                <div className="flex items-center gap-2">
                  <IndianRupee size={16} />
                  {job.salary}
                </div>

                <div className="flex items-center gap-2">
                  <Briefcase size={16} />
                  {job.experience}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-500"
              >
                Apply Now
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  toggleSaveJob(job.id)
                }
              >
                {isSaved
                  ? "Saved ✓"
                  : "Save Job"}
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Required Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {job.skills?.map(
              (skill) => (
                <Badge
                  key={skill}
                  className="px-4 py-2 text-sm"
                >
                  {skill}
                </Badge>
              )
            )}
          </div>
        </Card>

        <Card className="p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Job Description
          </h2>

          <p className="leading-8 text-muted-foreground">
            {job.description}
          </p>
        </Card>

        <div className="space-y-8">
          <ResumeAnalyzer
            skills={job.skills || []}
          />

          <CoverLetterGenerator
            jobTitle={job.title}
            company={job.company}
          />

          <InterviewPrep
            title={job.title}
          />
        </div>
      </div>
    </div>
  );
}