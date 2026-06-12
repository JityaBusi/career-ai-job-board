import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = {
  jobTitle: string;
  company: string;
};

export default function CoverLetterGenerator({
  jobTitle,
  company,
}: Props) {
  const [coverLetter, setCoverLetter] =
    useState("");

  const generateCoverLetter = () => {
    const generated = `
Dear Hiring Manager,

I am excited to apply for the ${jobTitle} position at ${company}.

My experience in software development, problem-solving, and building scalable applications makes me a strong fit for this role.

I am particularly interested in joining ${company} because of its innovative culture and commitment to excellence.

Thank you for your consideration.

Sincerely,
Your Name
    `;

    setCoverLetter(generated);
  };

  return (
    <Card className="p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">
        AI Cover Letter Generator
      </h2>

      <Button onClick={generateCoverLetter}>
        Generate Cover Letter
      </Button>

      {coverLetter && (
        <textarea
          className="w-full border rounded-lg p-4 mt-6 min-h-[250px]"
          value={coverLetter}
          readOnly
        />
      )}
    </Card>
  );
}