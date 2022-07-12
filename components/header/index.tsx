import Link from "next/link";
import styles from "../../styles/Home.module.css";

function Header() {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <Link href="/member">
        <a>Member</a>
      </Link>
      <Link href="/calendar">
        <a>Calendar</a>
      </Link>
      <Link href="/memory">
        <a>Memory</a>
      </Link>
      <Link href="/mukPlace">
        <a>Muk-place</a>
      </Link>
    </>
  );
}

export default Header;
