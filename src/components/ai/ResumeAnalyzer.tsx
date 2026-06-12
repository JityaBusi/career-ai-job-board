import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

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

  const analyzeResume = () => {
    const resumeText = resume.toLowerCase();

    const matchedSkills = skills.filter((skill) =>
      resumeText.includes(skill.toLowerCase())
    );

    const missing = skills.filter(
      (skill) =>
        !resumeText.includes(skill.toLowerCase())
    );

    const calculatedScore = Math.round(
      (matchedSkills.length / skills.length) *
        100
    );

    setScore(calculatedScore);
    setMissingSkills(missing);
  };

  return (
    <Card className="p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">
        AI Resume Match Analyzer
      </h2>

      <textarea
        className="w-full border rounded-lg p-4 min-h-[200px]"
        placeholder="Paste your resume here..."
        value={resume}
        onChange={(e) =>
          setResume(e.target.value)
        }
      />

      <Button
        className="mt-4"
        onClick={analyzeResume}
      >
        Analyze Resume
      </Button>

      {score > 0 && (
        <div className="mt-6">
          <h3 className="font-bold text-xl mb-2">
            Match Score: {score}%
          </h3>

          <Progress
            value={score}
            className="mb-6"
          />

          <div>
            <h4 className="font-semibold mb-2">
              Missing Skills
            </h4>

            {missingSkills.length > 0 ? (
              <ul className="list-disc ml-5">
                {missingSkills.map((skill) => (
                  <li key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                Excellent match! No missing
                skills detected.
              </p>
            )}
          </div>
        </div>
      )}
    </Card>
  );
}