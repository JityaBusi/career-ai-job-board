import { Router } from "express";

import {
  saveJob,
  getSavedJobs,
  removeSavedJob,
} from "../controllers/savedJob.controller";

import { protect } from "../middleware/auth.middleware";

const router = Router();

router.post(
  "/:jobId",
  protect,
  saveJob
);

router.get(
  "/",
  protect,
  getSavedJobs
);

router.get("/test", (req, res) => {
  res.json({ message: "Saved Jobs Route Working" });
});

router.delete(
  "/:jobId",
  protect,
  removeSavedJob
);

export default router;