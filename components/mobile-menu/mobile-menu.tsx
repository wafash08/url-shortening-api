import Link from "next/link";
import Button from "../button/button";
import styles from "./mobileMenu.module.css";

export default function MobileMenu() {
  return (
    <div className={styles.mobileMenu}>
      <nav className={styles.mobileNavigation}>
        <ul className={styles.navigationList}>
          <li>
            <Link href="#">Features</Link>
          </li>
          <li>
            <Link href="#">Features</Link>
          </li>
          <li>
            <Link href="#">Features</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.navigationButton}>
        <Button mode="transparentWhite">Login</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}
