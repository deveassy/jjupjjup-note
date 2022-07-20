import { Container } from "../styles/styles";
import styled from "styled-components";

const memberInfo = [
  {
    id: 1,
    name: "MEAING",
    mbti: "ESFP",
    img: "/img/mean.png",
    sns: "https://instagram.com/_meaneee?igshid=YmMyMTA2M2Y=",
    etc: "",
  },
  {
    id: 2,
    name: "DORI",
    mbti: "ESFJ",
    img: "/img/dori.png",
    sns: "https://instagram.com/iameundori?igshid=YmMyMTA2M2Y=",
    etc: "https://blog.naver.com/dmsthf116",
  },
  {
    id: 3,
    name: "EASSY",
    mbti: "INFJ",
    img: "/img/eassy.png",
    sns: "https://instagram.com/eassy_v?igshid=YmMyMTA2M2Y=",
    etc: "https://velog.io/@eassy",
  },
  {
    id: 4,
    name: "ZUDY",
    mbti: "ISTJ",
    img: "/img/zudy.png",
    sns: "https://instagram.com/wjstmdwn?igshid=YmMyMTA2M2Y=",
    etc: "https://youtube.com/channel/UC22sz9AhyjpOHh1PEwMSEHA",
  },
];

function Member() {
  return (
    <Container>
      <h1>Member page</h1>
      <CardContainer>
        {memberInfo.map((item) => (
          <CardWrapper key={item.id}>
            <Img src={item.img} alt={`member-${item.img}`} />
            <h2>{item.name}</h2>
            <h3>{item.mbti}</h3>
            <a href={item.sns}>인스타</a>
            <a href={item.etc}>기타</a>
          </CardWrapper>
        ))}
      </CardContainer>
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

const Img = styled.img`
  width: 200px;
  height: 200px;
`;
