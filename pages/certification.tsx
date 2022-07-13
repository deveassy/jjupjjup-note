import React, { useState, useEffect } from "react";
import { Header, Container, Wrapper, Form } from "../styles/styles";
import Steps from "../components/steps";

function Certification() {
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

    setText("");
  };

  useEffect(() => {
    const storageValue = localStorage.getItem("jjupjjup-user-name");

    setValue(storageValue);
  }, []);

  return (
    <Container>
      <h1>JJUPJJUP-NOTE</h1>
      {!!value?.length ? (
        <Steps />
      ) : (
        <Wrapper>
          <Header>HELLO</Header>
          <p>모임에 참석하시겠습니까?</p>
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="이름을 입력해주세요"
              value={text}
              onChange={handleChange}
            />
            {!!text.length && <p>[ {text} ]로</p>}
            <input type="button" value="참석하기" onClick={handleClick} />
          </Form>
        </Wrapper>
      )}
    </Container>
  );
}

export default Certification;
