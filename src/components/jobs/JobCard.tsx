import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  MapPin,
  Briefcase,
  IndianRupee,
  Bookmark,
  ArrowRight,
} from "lucide-react";

import { api } from "@/services/api";

type JobProps = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  experience: string;
  jobType: string;
  skills: string[];
  savedJobs: number[];
  toggleSaveJob: (id: number) => void;
};

export default function JobCard({
  id,
  title,
  company,
  location,
  salary,
  experience,
  jobType,
  skills,
  savedJobs,
  toggleSaveJob,
}: JobProps) {
  const navigate = useNavigate();

  const isSaved = savedJobs.includes(id);

  const companyInitial =
    company.charAt(0).toUpperCase();

  const matchScore = 92;

  const handleSaveJob = async (
  e: React.MouseEvent
) => {
  e.stopPropagation();

  const token =
    localStorage.getItem("token");

  if (!token) {
    alert(
      "Please login to save jobs"
    );
    navigate("/login");
    return;
  }

  try {
    if (isSaved) {
      await api.delete(
        `/saved-jobs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } else {
      await api.post(
        `/saved-jobs/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }

    toggleSaveJob(id);
  } catch (error: any) {
    console.error(error);

    alert(
      error?.response?.data?.message ||
        "Something went wrong"
    );
  }
};
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.2 }}
    >
      <Card
        onClick={() =>
          navigate(`/job/${id}`)
        }
        className="
          group
          cursor-pointer
          overflow-hidden
          border
          bg-white
          dark:bg-slate-900
          shadow-md
          hover:shadow-2xl
          transition-all
          duration-300
        "
      >
        <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-5">
            <div className="flex gap-4">
              <div
                className="
                  h-14
                  w-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-indigo-500
                  to-purple-500
                  text-white
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-lg
                  shadow-lg
                "
              >
                {companyInitial}
              </div>

              <div>
                <h2
                  className="
                    text-xl
                    font-bold
                    group-hover:text-indigo-600
                    transition
                  "
                >
                  {title}
                </h2>

                <p className="text-muted-foreground font-medium">
                  {company}
                </p>

                <div className="flex gap-2 mt-2">
                  <Badge
                    className="
                      bg-green-100
                      text-green-700
                      border-0
                    "
                  >
                    {jobType}
                  </Badge>

                  {location ===
                    "Remote" && (
                    <Badge
                      className="
                        bg-blue-100
                        text-blue-700
                        border-0
                      "
                    >
                      Remote
                    </Badge>
                  )}
                </div>
              </div>
            </div>
                  <button
  onClick={handleSaveJob}
  title={
    isSaved
      ? "Remove Saved Job"
      : "Save Job"
  }
  className="
    h-10
    w-10
    rounded-full
    flex
    items-center
    justify-center
    hover:bg-indigo-100
    dark:hover:bg-slate-800
    transition
  "
>
  <Bookmark
    size={20}
    className={
      isSaved
        ? "text-indigo-600"
        : ""
    }
    fill={
      isSaved
        ? "currentColor"
        : "none"
    }
  />
</button>
            
              
          </div>

          {/* Details */}
          <div className="space-y-3 mb-5">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} />
              {location}
            </div>

            <div className="flex items-center gap-2 text-green-600 font-semibold">
              <IndianRupee size={16} />
              {salary}
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Briefcase size={16} />
              {experience}
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {skills.map((skill) => (
              <Badge
                key={skill}
                className="
                  rounded-full
                  bg-indigo-50
                  text-indigo-700
                  border-0
                  dark:bg-indigo-950
                  dark:text-indigo-300
                "
              >
                {skill}
              </Badge>
            ))}
          </div>

          {/* AI Match Score */}
          <div className="mb-5">
            <div className="flex justify-between text-sm mb-2">
              <span>
                AI Match Score
              </span>

              <span className="font-semibold">
                {matchScore}%
              </span>
            </div>

            <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
              <div
                className="
                  h-2
                  rounded-full
                  bg-gradient-to-r
                  from-indigo-500
                  to-purple-500
                "
                style={{
                  width: `${matchScore}%`,
                }}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-sm">
                New Opportunity
              </p>

              <p className="text-xs text-muted-foreground">
                Posted 2 days ago
              </p>
            </div>

            <Button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/job/${id}`);
              }}
              className="
                bg-gradient-to-r
                from-indigo-500
                to-purple-500
                hover:from-indigo-600
                hover:to-purple-600
                text-white
                shadow-lg
              "
            >
              View Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}