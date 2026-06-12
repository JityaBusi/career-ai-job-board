import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";

import {
  Briefcase,
  Bookmark,
  TrendingUp,
  Sparkles,
} from "lucide-react";

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

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-10">
            <p className="text-indigo-600 font-semibold">
              Welcome Back 👋
            </p>

            <h1 className="text-5xl font-bold mt-2">
              Career Dashboard
            </h1>

            <p className="text-muted-foreground mt-3">
              Track applications, monitor
              progress, and receive AI-powered
              career insights.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-muted-foreground">
                    Saved Jobs
                  </p>

                  <h2 className="text-4xl font-bold mt-2">
                    12
                  </h2>
                </div>

                <Bookmark className="h-10 w-10 text-indigo-500" />
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-muted-foreground">
                    Applications
                  </p>

                  <h2 className="text-4xl font-bold mt-2">
                    24
                  </h2>
                </div>

                <Briefcase className="h-10 w-10 text-purple-500" />
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-muted-foreground">
                    Match Score
                  </p>

                  <h2 className="text-4xl font-bold mt-2">
                    87%
                  </h2>
                </div>

                <TrendingUp className="h-10 w-10 text-green-500" />
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Chart */}
            <div className="lg:col-span-2">
              <Card className="p-6 border-0 shadow-lg">
                <h2 className="text-2xl font-bold mb-4">
                  Application Activity
                </h2>

                <ResponsiveContainer
                  width="100%"
                  height={350}
                >
                  <BarChart data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="applications"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* AI Insight */}
              <Card className="p-6 border-0 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="text-indigo-500" />

                  <h2 className="font-bold text-xl">
                    AI Insights
                  </h2>
                </div>

                <p className="text-muted-foreground">
                  Your profile matches 87% of
                  Frontend Developer roles.
                  Adding AWS and Docker skills
                  could increase your matches.
                </p>
              </Card>

              {/* Recent Activity */}
              <Card className="p-6 border-0 shadow-lg">
                <h2 className="font-bold text-xl mb-4">
                  Recent Activity
                </h2>

                <div className="space-y-4">
                  <div>
                    <p className="font-medium">
                      Applied to Google
                    </p>

                    <p className="text-sm text-muted-foreground">
                      Frontend Developer
                    </p>
                  </div>

                  <div>
                    <p className="font-medium">
                      Saved Netflix Job
                    </p>

                    <p className="text-sm text-muted-foreground">
                      DevOps Engineer
                    </p>
                  </div>

                  <div>
                    <p className="font-medium">
                      Resume Analyzed
                    </p>

                    <p className="text-sm text-muted-foreground">
                      Match Score 92%
                    </p>
                  </div>
                </div>
              </Card>

              {/* Progress */}
              <Card className="p-6 border-0 shadow-lg">
                <h2 className="font-bold text-xl mb-4">
                  Career Progress
                </h2>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Profile Completion</span>
                      <span>80%</span>
                    </div>

                    <div className="h-3 bg-slate-200 rounded-full">
                      <div className="h-3 w-4/5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}