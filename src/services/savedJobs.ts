import { api } from "./api";

export const saveJob = async (
  jobId: number,
  token: string
) => {
  return api.post(
    `/saved-jobs/${jobId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};