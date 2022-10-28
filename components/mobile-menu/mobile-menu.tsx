import Link from "next/link";
import styles from "./mobileMenu.module.css";

export default function MobileMenu() {
  return (
    <nav className={styles.mobile_menu}>
      <ul>
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
  );
}
