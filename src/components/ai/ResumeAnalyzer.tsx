import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.mjs",
  import.meta.url
).toString();

type Props = {
  skills: string[];
};

export default function ResumeAnalyzer({
  skills,
}: Props) {
  const [resume, setResume] = useState("");
  const [score, setScore] = useState(0);

  const [missingSkills, setMissingSkills] =
    useState<string[]>([]);

  const [fileName, setFileName] =
    useState("");

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setFileName(file.name);

    try {
      // TXT
      if (file.type === "text/plain") {
        const reader = new FileReader();

        reader.onload = (e) => {
          const text = e.target?.result as string;
          setResume(text);
        };

        reader.readAsText(file);
        return;
      }

      // PDF
      if (file.type === "application/pdf") {
        const arrayBuffer =
          await file.arrayBuffer();

        const pdf =
          await pdfjsLib.getDocument({
            data: arrayBuffer,
          }).promise;

        let extractedText = "";

        for (
          let pageNum = 1;
          pageNum <= pdf.numPages;
          pageNum++
        ) {
          const page =
            await pdf.getPage(pageNum);

          const content =
            await page.getTextContent();

          const pageText = content.items
            .map((item: any) => item.str)
            .join(" ");

          extractedText +=
            pageText + "\n";
        }

        setResume(extractedText);
      }
    } catch (error) {
      console.error(error);

      alert(
        "Unable to read the selected file."
      );
    }
  };

  const analyzeResume = () => {
    const resumeText =
      resume.toLowerCase();

    const matchedSkills = skills.filter(
      (skill) =>
        resumeText.includes(
          skill.toLowerCase()
        )
    );

    const missing = skills.filter(
      (skill) =>
        !resumeText.includes(
          skill.toLowerCase()
        )
    );

    const calculatedScore = Math.round(
      (matchedSkills.length /
        skills.length) *
        100
    );

    setScore(calculatedScore);
    setMissingSkills(missing);
  };

  return (
    <Card className="p-8 shadow-xl border-0">
      <h2 className="text-3xl font-bold mb-2">
        AI Resume Match Analyzer
      </h2>

      <p className="text-muted-foreground mb-6">
        Upload your resume or paste its
        contents to compare against job
        requirements.
      </p>

      {/* Upload Area */}
      <div className="mb-6">
        <label
          htmlFor="resumeUpload"
          className="
            flex
            flex-col
            items-center
            justify-center
            border-2
            border-dashed
            rounded-2xl
            p-8
            cursor-pointer
            hover:bg-accent
            transition
          "
        >
          <span className="text-4xl mb-3">
            📄
          </span>

          <p className="font-semibold">
            Upload Resume
          </p>

          <p className="text-sm text-muted-foreground">
            Supported formats:
            PDF, TXT
          </p>
        </label>

        <input
          id="resumeUpload"
          type="file"
          accept=".pdf,.txt"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>

      {fileName && (
        <div className="mb-4 rounded-xl bg-green-50 dark:bg-green-950 p-4">
          <p className="text-green-700 dark:text-green-300">
            Uploaded: {fileName}
          </p>
        </div>
      )}

      {/* Text Area */}
      <textarea
        className="
          w-full
          border
          rounded-xl
          p-4
          min-h-[220px]
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
        "
        placeholder="Or paste your resume here..."
        value={resume}
        onChange={(e) =>
          setResume(e.target.value)
        }
      />

      <Button
        className="
          mt-4
          bg-gradient-to-r
          from-indigo-500
          to-purple-500
          hover:from-indigo-600
          hover:to-purple-600
        "
        onClick={analyzeResume}
      >
        Analyze Resume
      </Button>

      {/* Results */}
      {score > 0 && (
        <div className="mt-8">
          <h3 className="font-bold text-2xl mb-3">
            Match Score: {score}%
          </h3>

          <Progress
            value={score}
            className="mb-6"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {/* Missing Skills */}
            <Card className="p-5">
              <h4 className="font-semibold mb-3">
                Missing Skills
              </h4>

              {missingSkills.length >
              0 ? (
                <ul className="list-disc ml-5 space-y-1">
                  {missingSkills.map(
                    (skill) => (
                      <li key={skill}>
                        {skill}
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <p className="text-green-600">
                  Excellent match! No
                  missing skills detected.
                </p>
              )}
            </Card>

            {/* Recommendations */}
            <Card className="p-5">
              <h4 className="font-semibold mb-3">
                AI Recommendations
              </h4>

              {missingSkills.length >
              0 ? (
                <ul className="space-y-2">
                  {missingSkills.map(
                    (skill) => (
                      <li key={skill}>
                        • Add projects,
                        certifications,
                        or experience
                        related to{" "}
                        <strong>
                          {skill}
                        </strong>
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <p>
                  Your resume aligns
                  strongly with this
                  role. Highlight
                  measurable business
                  impact and key
                  achievements.
                </p>
              )}
            </Card>
          </div>
        </div>
      )}
    </Card>
  );
}