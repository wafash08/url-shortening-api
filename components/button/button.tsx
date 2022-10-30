import * as React from "react";
import styles from "./button.module.css";

// type ButtonColors = "transparent" | "cyan";

interface ButtonBaseProps {
  mode?: string;
  children?: React.ReactNode;
}

export type ButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const getButtonClassnames = (mode: string) => {
  switch (mode) {
    case "normal":
      return "";

    case "transparent":
      return styles.transparent;

    case "transparentWhite":
      return styles.transparentWhite;
    default:
      break;
  }
};

export default function Button({
  mode = "normal",
  type,
  children,
}: ButtonProps) {
  let buttonClassname = getButtonClassnames(mode);

  return (
    <button
      type={type ?? "button"}
      className={`${styles.btn} ${buttonClassname}`}
    >
      {children}
    </button>
  );
}
