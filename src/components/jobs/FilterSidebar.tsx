type Props = {
  remoteOnly: boolean;
  setRemoteOnly: (value: boolean) => void;

  experience: string;
  setExperience: (value: string) => void;

  jobType: string;
  setJobType: (value: string) => void;
};

export default function FilterSidebar({
  remoteOnly,
  setRemoteOnly,
  experience,
  setExperience,
  jobType,
  setJobType,
}: Props) {
  return (
    <div className="sticky top-24 rounded-3xl border bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Filters
        </h2>

        <p className="text-sm text-muted-foreground">
          Refine your job search
        </p>
      </div>

      {/* Remote */}
      <div className="mb-8">
        <h3 className="font-semibold mb-3">
          Work Mode
        </h3>

        <button
          onClick={() =>
            setRemoteOnly(!remoteOnly)
          }
          className={`w-full rounded-xl p-3 border transition-all ${
            remoteOnly
              ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent"
              : "hover:bg-accent"
          }`}
        >
          🌍 Remote Only
        </button>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h3 className="font-semibold mb-3">
          Experience
        </h3>

        <div className="flex flex-wrap gap-2">
          {[
            "0-2 Years",
            "2-4 Years",
            "5+ Years",
          ].map((level) => (
            <button
              key={level}
              onClick={() =>
                setExperience(
                  experience === level
                    ? ""
                    : level
                )
              }
              className={`px-3 py-2 rounded-full border text-sm transition ${
                experience === level
                  ? "bg-indigo-500 text-white border-indigo-500"
                  : "hover:bg-accent"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Job Type */}
      <div>
        <h3 className="font-semibold mb-3">
          Job Type
        </h3>

        <div className="flex flex-wrap gap-2">
          {[
            "Full Time",
            "Part Time",
            "Contract",
            "Internship",
          ].map((type) => (
            <button
              key={type}
              onClick={() =>
                setJobType(
                  jobType === type
                    ? ""
                    : type
                )
              }
              className={`px-3 py-2 rounded-full border text-sm transition ${
                jobType === type
                  ? "bg-purple-500 text-white border-purple-500"
                  : "hover:bg-accent"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Reset Filters */}
      <button
        onClick={() => {
          setRemoteOnly(false);
          setExperience("");
          setJobType("");
        }}
        className="mt-8 w-full rounded-xl border p-3 hover:bg-accent transition"
      >
        Reset Filters
      </button>
    </div>
  );
}