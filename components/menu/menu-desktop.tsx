import Link from "next/link";
import Button from "../button/button";
import styles from "./menuDesktop.module.css";

export default function MenuDesktop() {
  return (
    <div className={styles.menu}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="#">
              Features
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="#">
              Features
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="#">
              Features
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.buttonsWrapper}>
        <Button mode="transparentWhite">Login</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}
