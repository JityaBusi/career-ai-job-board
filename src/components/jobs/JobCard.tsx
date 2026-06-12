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
} from "lucide-react";

type JobProps = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  experience: string;
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
  skills,
  savedJobs,
  toggleSaveJob,
}: JobProps) {
  const navigate = useNavigate();

  const isSaved = savedJobs.includes(id);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        onClick={() => navigate(`/job/${id}`)}
        className="p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
      >
        <div className="space-y-4">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold">
                {title}
              </h2>

              <p className="text-muted-foreground">
                {company}
              </p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleSaveJob(id);
              }}
              className="cursor-pointer"
            >
              <Bookmark
                size={22}
                fill={
                  isSaved
                    ? "currentColor"
                    : "none"
                }
              />
            </button>
          </div>

          {/* Details */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{location}</span>
            </div>

            <div className="flex items-center gap-2">
              <IndianRupee size={16} />
              <span>{salary}</span>
            </div>

            <div className="flex items-center gap-2">
              <Briefcase size={16} />
              <span>{experience}</span>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill}>
                {skill}
              </Badge>
            ))}
          </div>

          {/* Action */}
          <Button
            className="w-full"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/job/${id}`);
            }}
          >
            View Details
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}