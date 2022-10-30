import { ButtonProps } from "../button/button";
import styles from "./hamburgerButton.module.css";

export default function HamburgerButton({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={styles.hamburgerButton}
      aria-label="Menu Navigation"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
