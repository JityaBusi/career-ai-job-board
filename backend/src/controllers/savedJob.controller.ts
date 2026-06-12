import { Response } from "express";
import prisma from "../prisma";
import { AuthRequest } from "../middleware/auth.middleware";

export const saveJob = async (
  req: AuthRequest,
  res: Response
) => {
  const userId = req.userId!;
  const jobId = Number(req.params.jobId);

  const existing =
    await prisma.savedJob.findFirst({
      where: {
        userId,
        jobId,
      },
    });

  if (existing) {
    return res.status(400).json({
      message: "Job already saved",
    });
  }

  const saved =
    await prisma.savedJob.create({
      data: {
        userId,
        jobId,
      },
    });

  res.json(saved);
};

export const getSavedJobs = async (
  req: AuthRequest,
  res: Response
) => {
  const jobs =
    await prisma.savedJob.findMany({
      where: {
        userId: req.userId,
      },
      include: {
        job: true,
      },
    });

  res.json(jobs);
};

export const removeSavedJob = async (
  req: AuthRequest,
  res: Response
) => {
  const userId = req.userId!;
  const jobId = Number(req.params.jobId);

  await prisma.savedJob.deleteMany({
    where: {
      userId,
      jobId,
    },
  });

  res.json({
    message: "Job removed successfully",
  });
};