export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  experience: string;
  jobType: string;
  skills: string[];
};

export const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
    salary: "₹15-25 LPA",
    experience: "2-4 Years",
    jobType: "Full Time",
    skills: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "Microsoft",
    location: "Hyderabad",
    salary: "₹20-35 LPA",
    experience: "3-5 Years",
    jobType: "Full Time",
    skills: ["Node.js", "React", "PostgreSQL"],
  },
  {
    id: 3,
    title: "AI Engineer",
    company: "OpenAI",
    location: "Remote",
    salary: "₹30-50 LPA",
    experience: "5+ Years",
    jobType: "Full Time",
    skills: ["Python", "LLMs", "LangChain"],
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "Netflix",
    location: "Bangalore",
    salary: "₹25-40 LPA",
    experience: "3-5 Years",
    jobType: "Contract",
    skills: ["AWS", "Docker", "Kubernetes"],
  },
  {
    id: 5,
    title: "Software Engineering Intern",
    company: "Stripe",
    location: "Remote",
    salary: "₹50K/month",
    experience: "0-2 Years",
    jobType: "Internship",
    skills: ["JavaScript", "React", "Git"],
  },
];