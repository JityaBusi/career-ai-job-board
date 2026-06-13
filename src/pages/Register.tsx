import { useState } from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";

import { api } from "@/services/api";

import {
  User,
  Mail,
  Lock,
  Briefcase,
} from "lucide-react";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await api.post(
        "/auth/register",
        {
          name,
          email,
          password,
        }
      );

      navigate("/login");
    } catch (error: any) {
  console.error(error);

  alert(
    error?.response?.data?.message ||
    error?.message ||
    "Registration failed"
  );
}
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white items-center justify-center p-12">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase size={40} />

            <h1 className="text-4xl font-bold">
              CareerAI
            </h1>
          </div>

          <h2 className="text-5xl font-bold mb-6">
            Create Account
          </h2>

          <p className="text-lg text-white/80">
            Join thousands of job seekers
            using AI to accelerate their
            careers.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6">
        <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold mb-2">
            Register
          </h2>

          <p className="text-muted-foreground mb-8">
            Create your CareerAI account
          </p>

          <form
            onSubmit={
              handleRegister
            }
            className="space-y-5"
          >
            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-4 text-muted-foreground"
              />

              <input
                placeholder="Full Name"
                className="w-full border rounded-xl pl-12 pr-4 py-3"
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
              />
            </div>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-4 text-muted-foreground"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-xl pl-12 pr-4 py-3"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
              />
            </div>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-4 text-muted-foreground"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-xl pl-12 pr-4 py-3"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
              />
            </div>

            <button
              type="submit"
              className="
                w-full
                py-3
                rounded-xl
                bg-gradient-to-r
                from-indigo-500
                to-purple-500
                text-white
                font-semibold
                hover:scale-[1.02]
                transition
              "
            >
              Create Account
            </button>
          </form>

          <p className="text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}