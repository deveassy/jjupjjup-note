import Link from "next/link";
import styles from "../../styles/Home.module.css";
import styled from "styled-components";
import { Container } from "../../styles/styles";

function Header() {
  return (
    <Container>
      <Link href="/">
        <a className={styles.title}>
          <h1>JJUPJJUP-NOTE</h1>
        </a>
      </Link>
      <NavWrapper>
        <Link href="/member">Member</Link>
        <Link href="/calendar">Calendar</Link>
        <Link href="/memory">Memory</Link>
        <Link href="/mukPlace">Muk-place</Link>
      </NavWrapper>
    </Container>
  );
}

export default Header;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 70px;
`;
