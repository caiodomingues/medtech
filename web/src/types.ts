import React, { InputHTMLAttributes, ButtonHTMLAttributes } from "react";

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  visible?: boolean | string | undefined;
  width?: number | string | undefined;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface UserProps {
  name: string;
  email: string;
  enrollment: string | number;
  cpf: string | number;
  photo: string;
}

export interface LoginCredentials {
  enrollment: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
}

export interface AuthContextProps {
  signed: boolean;
  loading: boolean;
  user: UserProps | string;
  setLoading: (loading: boolean) => void;
  signIn: (credentials: LoginCredentials) => Promise<void>;
  signOut: () => {};
  register: (credentials: RegisterCredentials) => Promise<void>;
}

export interface RouteParams {
  id: string | number | null;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  efunction: string;
  created_at: string;
  updated_at: string;
}

export interface Report {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Exam {
  id: string;
  name: string;
  shelf_life: string | number;
  created_at: string;
  updated_at: string;
}

export interface ExamType {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}
