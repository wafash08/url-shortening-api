import styles from "./hamburgerButton.module.css";

export default function HamburgerButton() {
  return (
    <button className={styles.hamburgerButton} aria-label="Menu Navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
