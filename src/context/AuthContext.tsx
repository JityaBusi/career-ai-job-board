import {
  createContext,
  useContext,
  useState,
} from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
};

const AuthContext =
  createContext<AuthContextType>({
    user: null,
    token: null,
  });

export const useAuth = () =>
  useContext(AuthContext);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user] = useState(() => {
    const stored =
      localStorage.getItem("user");

    return stored
      ? JSON.parse(stored)
      : null;
  });

  const [token] = useState(() =>
    localStorage.getItem("token")
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}