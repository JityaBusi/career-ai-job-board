import { useNavigate } from "react-router-dom";
import { Briefcase, Bookmark, LayoutDashboard } from "lucide-react";

type NavbarProps = {
  savedCount: number;
};

export default function Navbar({
  savedCount,
}: NavbarProps) {
  const navigate = useNavigate();

  return (
    <header className="border-b bg-background sticky top-0 z-50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Briefcase className="h-6 w-6" />

          <h1 className="font-bold text-xl">
            CareerAI
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate("/")}
            className="hover:text-primary transition"
          >
            Jobs
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 hover:text-primary transition"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </button>

          <button
            className="flex items-center gap-2 hover:text-primary transition"
          >
            <Bookmark size={18} />
            Saved ({savedCount})
          </button>

          <button
            className="rounded-lg border px-4 py-2 hover:bg-accent transition"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
}