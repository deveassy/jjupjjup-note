import { useEffect, useState } from "react";
import Steps from "../../components/steps";
import * as S from "./styles";

const CertificationLayout = () => {
  const [text, setText] = useState<string>("");
  const [value, setValue] = useState<string | null>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    localStorage.setItem("jjupjjup-user-name", text);
    setText("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("jjupjjup-user-name", text);

    // setText("");
  };

  useEffect(() => {
    const storageValue = localStorage.getItem("jjupjjup-user-name");

    setValue(storageValue);
  }, []);
  return (
    <S.Container>
      <h1>JJUPJJUP-NOTE</h1>
      {!!value?.length ? (
        <Steps />
      ) : (
        <S.Wrapper>
          <S.Header>HELLO</S.Header>
          <p>모임에 참석하시겠습니까?</p>
          <S.Form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="이름을 입력해주세요"
              value={text}
              onChange={handleChange}
            />
            {!!text.length && <p>[ {text} ]로</p>}
            <input type="button" value="참석하기" onClick={handleClick} />
          </S.Form>
        </S.Wrapper>
      )}
    </S.Container>
  );
};

export default CertificationLayout;
