import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  buttonStyle?: "circul" | "transporen" | "border-grey" | "border-usual";
  buttonSize?: "small" | "midle" | "big";
}
