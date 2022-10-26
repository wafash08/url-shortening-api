import * as React from "react";
import styles from "./button.module.css";

// type ButtonColors = "transparent" | "cyan";

interface ButtonBaseProps {
  hasBackground?: boolean;
  children: React.ReactNode;
}

type ButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  hasBackground = true,
  type,
  children,
}: ButtonProps) {
  const handleHasBackground = hasBackground ? styles.btn : styles.transparent;

  return (
    <button type={type ?? "button"} className={handleHasBackground}>
      {children}
    </button>
  );
}
