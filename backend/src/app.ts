import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import jobRoutes from "./routes/job.routes";
import authRoutes from "./routes/auth.routes";
import savedJobRoutes from "./routes/savedJob.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/jobs", jobRoutes);
app.use("/auth", authRoutes);
app.use("/saved-jobs", savedJobRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});