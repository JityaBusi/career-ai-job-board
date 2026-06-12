import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing jobs
  await prisma.job.deleteMany();

  await prisma.job.createMany({
    data: [
      {
        title: "Frontend Developer",
        company: "Google",
        location: "Remote",
        salary: "₹15-25 LPA",
        experience: "2-4 Years",
        jobType: "Full Time",
        description:
          "Build modern React applications and deliver exceptional user experiences.",
        skills: [
          "React",
          "TypeScript",
          "Tailwind CSS",
        ],
      },
      {
        title: "Full Stack Engineer",
        company: "Microsoft",
        location: "Hyderabad",
        salary: "₹20-35 LPA",
        experience: "3-5 Years",
        jobType: "Full Time",
        description:
          "Work across frontend and backend systems using modern technologies.",
        skills: [
          "Node.js",
          "React",
          "PostgreSQL",
        ],
      },
      {
        title: "AI Engineer",
        company: "OpenAI",
        location: "Remote",
        salary: "₹30-50 LPA",
        experience: "4+ Years",
        jobType: "Full Time",
        description:
          "Develop AI-powered applications using LLMs and modern AI frameworks.",
        skills: [
          "Python",
          "LLMs",
          "LangChain",
        ],
      },
      {
        title: "Backend Developer",
        company: "Amazon",
        location: "Bangalore",
        salary: "₹18-30 LPA",
        experience: "2-5 Years",
        jobType: "Full Time",
        description:
          "Build scalable backend services and cloud-native applications.",
        skills: [
          "Java",
          "Spring Boot",
          "MySQL",
        ],
      },
      {
        title: "DevOps Engineer",
        company: "Netflix",
        location: "Remote",
        salary: "₹25-40 LPA",
        experience: "3-6 Years",
        jobType: "Full Time",
        description:
          "Manage cloud infrastructure, CI/CD pipelines, and deployment automation.",
        skills: [
          "AWS",
          "Docker",
          "Kubernetes",
        ],
      },
    ],
  });

  console.log("✅ Jobs seeded successfully!");
}

main()
  .catch((error) => {
    console.error(error);
    // process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });