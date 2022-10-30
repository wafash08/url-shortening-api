import Link from "next/link";
import Button from "../button/button";
import styles from "./menu.module.css";

type MobileMenuProps = {
  isShow: boolean;
};

export default function Menu({ isShow }: MobileMenuProps) {
  // TODO : MENYEMBUNYIKAN DAN MENAMPILKAN MOBILE MENU KETIKA HAMBURGER BUTTON DIKLIK

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
