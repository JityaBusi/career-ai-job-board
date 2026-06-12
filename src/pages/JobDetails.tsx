import { useParams } from "react-router-dom";
import { jobs } from "@/data/jobs";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import ResumeAnalyzer from "@/components/ai/ResumeAnalyzer";
import CoverLetterGenerator from "@/components/ai/CoverLetterGenerator";
import InterviewPrep from "@/components/ai/InterviewPrep";

export default function JobDetails() {
  const { id } = useParams();

  const job = jobs.find(
    (job) => job.id === Number(id)
  );

  if (!job) {
    return <h1>Job Not Found</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4">
        {job.title}
      </h1>

      <p className="text-xl text-muted-foreground mb-4">
        {job.company}
      </p>

      {/* Details */}
      <div className="space-y-2 mb-6">
        <p>
          <strong>Location:</strong>{" "}
          {job.location}
        </p>

        <p>
          <strong>Salary:</strong>{" "}
          {job.salary}
        </p>

        <p>
          <strong>Experience:</strong>{" "}
          {job.experience}
        </p>
      </div>

      {/* Skills */}
      <div className="flex gap-2 flex-wrap mb-6">
        {job.skills.map((skill) => (
          <Badge key={skill}>
            {skill}
          </Badge>
        ))}
      </div>

      {/* Description */}
      <div className="border rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-bold mb-3">
          Job Description
        </h2>

        <p>
          We are looking for a talented{" "}
          {job.title} to join our team and help
          build scalable products used by
          thousands of users.
        </p>
      </div>

      <Button size="lg">
        Apply Now
      </Button>

      {/* AI Resume Analyzer */}
      <ResumeAnalyzer
        skills={job.skills}
      />

      {/* AI Cover Letter Generator */}
      <CoverLetterGenerator
        jobTitle={job.title}
        company={job.company}
      />

      {/* AI Interview Prep */}
      <InterviewPrep
        title={job.title}
      />
    </div>
  );
}