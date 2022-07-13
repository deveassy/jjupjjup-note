import Link from "next/link";
import { Container } from "../styles/styles";
import styled from "styled-components";

const memberInfo = [
  {
    id: 1,
    name: "MEANING",
    mbti: "ESFP",
    img: "",
  },
  {
    id: 2,
    name: "DORI",
    mbti: "ESFJ",
    img: "",
  },
  {
    id: 3,
    name: "EASSY",
    mbti: "INFJ",
    img: "",
  },
  {
    id: 4,
    name: "JUDY",
    mbti: "ISTJ",
    img: "",
  },
];

function Member() {
  return (
    <Container>
      <h1>Member page</h1>
      <CardContainer>
        {memberInfo.map((item) => (
          <CardWrapper key={item.id}>
            <Img />
            <h2>{item.name}</h2>
            <h3>{item.mbti}</h3>
          </CardWrapper>
        ))}
      </CardContainer>
      <Link href="/">
        <a>back</a>
      </Link>
    </Container>
  );
}

export default Member;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  padding: 10px;
  border: 2px solid #888;
`;

const Img = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  border-radius: 50%;
`;
