import { Card } from "@/components/ui/card";

type Props = {
  title: string;
};

export default function InterviewPrep({
  title,
}: Props) {
  const questions = [
    `Tell me about yourself.`,
    `Why do you want to become a ${title}?`,
    `Explain a challenging project you worked on.`,
    `How do you debug production issues?`,
    `What are your strengths and weaknesses?`,
  ];

  return (
    <Card className="p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">
        AI Interview Preparation
      </h2>

      <ul className="space-y-3">
        {questions.map((q, index) => (
          <li key={index}>
            • {q}
          </li>
        ))}
      </ul>
    </Card>
  );
}