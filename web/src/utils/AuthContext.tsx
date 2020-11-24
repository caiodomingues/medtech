import React, { useState, useEffect, useContext, createContext } from "react";
import api from "../services/api";

import {
  AuthContextProps,
  LoginCredentials,
  RegisterCredentials,
  UserProps,
} from "../types";

const AuthContext = createContext<Partial<AuthContextProps>>({});

export function AuthProvider({ children }: any) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");
  const [signed, setSigned] = useState(false);


  useEffect(() => {
    async function loadStorageData() {
      setLoading(true);
      const storagedToken = localStorage.getItem("medtech_token");
      const _user = localStorage.getItem("medtech_user");

      if (storagedToken) {
        setSigned(true);
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setUser(_user!);
      } else {
        setSigned(false);
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  async function saveUser(token: string, user: UserProps) {
    localStorage.setItem("medtech_token", token);
    localStorage.setItem("medtech_user", JSON.stringify(user));
  }

  async function signIn(credentials: LoginCredentials) {
    setLoading(true);
    await api
      .post("/sessions", credentials)
      .then(async (res) => {
        await saveUser(res.data.token, res.data.user);
        setSigned(true);
        setLoading(false);

      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  async function signOut() {
    setLoading(true);
    localStorage.removeItem("medtech_token");
    localStorage.removeItem("medtech_user");
    setSigned(false);
    setLoading(false);
  }

  async function register(credentials: RegisterCredentials) {
    setLoading(true);
    await api
      .post("/users", credentials)
      .then(async (res) => {
        signIn({ enrollment: credentials.enrollment, password: credentials.password });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        signed,
        loading,
        user,
        signIn,
        signOut,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

export default AuthContext;
