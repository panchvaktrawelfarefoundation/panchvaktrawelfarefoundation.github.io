import { createContext, useContext, useMemo } from "react";

export const authQuery = {
  queryKey: ["auth", "me"],
  queryFn: async () => ({ user: null, error: null }),
  staleTime: Infinity,
};

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const value = useMemo(
    () => ({
      user: null,
      isAuthenticated: false,
      isLoadingAuth: false,
      authError: null,
      refresh: () => Promise.resolve(),
      logout: () => {},
      navigateToLogin: () => {},
    }),
    [],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
