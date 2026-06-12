import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  Briefcase,
  Bookmark,
  LayoutDashboard,
  Sparkles,
  LogOut,
  User,
} from "lucide-react";

type NavbarProps = {
  savedCount: number;
};

export default function Navbar({
  savedCount,
}: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path;

  const user = localStorage.getItem("user")
    ? JSON.parse(
        localStorage.getItem("user") as string
      )
    : null;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
    navigate("/login");
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        bg-white/90
        dark:bg-slate-950/90
        backdrop-blur-xl
        shadow-sm
      "
    >
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="h-24 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-4 cursor-pointer group"
          >
            <div
              className="
                h-14
                w-14
                rounded-2xl
                bg-gradient-to-r
                from-indigo-500
                to-purple-500
                flex
                items-center
                justify-center
                text-white
                shadow-lg
                group-hover:scale-110
                transition
              "
            >
              <Briefcase size={24} />
            </div>

            <div className="leading-tight">
              <h1 className="font-extrabold text-2xl tracking-tight">
                CareerAI
              </h1>

              <p className="text-sm text-muted-foreground font-medium">
                AI Career Platform
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className={`
                px-5 py-2.5 rounded-xl transition font-medium
                ${
                  isActive("/")
                    ? "bg-indigo-500 text-white shadow-md"
                    : "hover:bg-accent"
                }
              `}
            >
              Jobs
            </button>

            <button
              onClick={() =>
                navigate("/dashboard")
              }
              className={`
                flex items-center gap-2
                px-5 py-2.5 rounded-xl transition font-medium
                ${
                  isActive("/dashboard")
                    ? "bg-indigo-500 text-white shadow-md"
                    : "hover:bg-accent"
                }
              `}
            >
              <LayoutDashboard size={18} />
              Dashboard
            </button>

            {/* Saved Jobs */}
            <div
              className="
                flex items-center gap-2
                px-5 py-2.5
                rounded-xl
                bg-indigo-500/10
                text-indigo-600
                dark:text-indigo-400
                font-semibold
              "
            >
              <Bookmark size={18} />
              {savedCount} Saved
            </div>

            {/* Logged In User */}
            {user ? (
              <>
                <div
                  className="
                    flex items-center gap-2
                    px-4 py-2.5
                    rounded-xl
                    bg-slate-100
                    dark:bg-slate-800
                  "
                >
                  <User size={18} />

                  <span className="font-medium">
                    {user.name}
                  </span>
                </div>

                <button
                  onClick={logout}
                  className="
                    flex items-center gap-2
                    px-5 py-2.5
                    rounded-xl
                    border
                    hover:bg-red-50
                    hover:text-red-600
                    transition
                  "
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() =>
                    navigate("/login")
                  }
                  className="
                    px-5 py-2.5
                    rounded-xl
                    border
                    font-medium
                    hover:bg-accent
                    transition
                  "
                >
                  Login
                </button>

                <button
                  onClick={() =>
                    navigate("/register")
                  }
                  className="
                    flex items-center gap-2
                    px-6 py-2.5
                    rounded-xl
                    bg-gradient-to-r
                    from-indigo-500
                    to-purple-500
                    text-white
                    font-semibold
                    shadow-lg
                    hover:scale-105
                    transition
                  "
                >
                  <Sparkles size={18} />
                  Register
                </button>
              </>
            )}
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <div
              className="
                flex items-center gap-1
                px-3 py-2
                rounded-lg
                bg-indigo-500/10
                text-indigo-600
              "
            >
              <Bookmark size={16} />
              {savedCount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}