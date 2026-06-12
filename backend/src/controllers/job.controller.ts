import { Request, Response } from "express";
import prisma from "../prisma";

// export const getJobs = async (
//   req: Request,
//   res: Response
// ) => {
//   const jobs = await prisma.job.findMany();

//   console.log(jobs);

//   res.json(jobs);
// };

export const getJobs = async (
  req: Request,
  res: Response
) => {
  const jobs = await prisma.job.findMany();

  console.log(
    JSON.stringify(jobs, null, 2)
  );

  res.json(jobs);
};

export const getJobById = async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);

  const job = await prisma.job.findUnique({
    where: { id },
  });

  if (!job) {
    return res
      .status(404)
      .json({ message: "Job not found" });
  }

  res.json(job);
};