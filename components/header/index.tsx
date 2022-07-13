import Link from "next/link";
import styles from "../../styles/Home.module.css";
import styled from "styled-components";
import { Container } from "../../styles/styles";

function Header() {
  return (
    <Container>
      <h1 className={styles.title}>JJUPJJUP-NOTE</h1>
      <NavWrapper>
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
