import Link from "next/link";
import { Container } from "../styles/styles";
import styled from "styled-components";
import { useEffect, useState } from "react";
import MapComponent from "../components/map";

function MukPlace() {
  return (
    <Container>
      <h1>Muk-Place page</h1>
      <MapComponent latitude={33.450701} longitude={126.570667} />
      <Link href="/">
        <a>back</a>
      </Link>
    </Container>
  );
}

export default MukPlace;

const MapDiv = styled.div`
  width: 500px;
  height: 400px;
`;
