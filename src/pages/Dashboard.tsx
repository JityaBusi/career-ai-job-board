import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const data = [
  { month: "Jan", applications: 4 },
  { month: "Feb", applications: 7 },
  { month: "Mar", applications: 10 },
  { month: "Apr", applications: 8 },
  { month: "May", applications: 12 },
];

export default function Dashboard() {
  return (
    <>
      <Navbar savedCount={0} />

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <h2 className="text-3xl font-bold">
              12
            </h2>

            <p>Saved Jobs</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-3xl font-bold">
              24
            </h2>

            <p>Applications</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-3xl font-bold">
              87%
            </h2>

            <p>Average Match Score</p>
          </Card>
        </div>

        {/* Chart */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            Application Activity
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="applications" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </>
  );
}