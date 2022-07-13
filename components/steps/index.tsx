import React, { useState } from "react";
import { Wrapper, Form } from "../../styles/styles";
import styled from "styled-components";
import { useRouter } from "next/router";

const QuestionArray = [
  {
    id: 0,
    question: "1. 개발자의 별명은? (2자)",
    password: "털지",
  },
  {
    id: 1,
    question:
      "2. 고등학생때 먹을것을 좋아하던 친구들과 만든 모임 이름은? (2자)",
    password: "먹팸",
  },
  {
    id: 2,
    question:
      "3. 현재 이 모임의 첫 인생네컷을 찍은 날짜는? (20220701 형식으로 작성)",
    password: "20210606",
  },
];

function Steps() {
  const [step, setStep] = useState<number>(0);
  const [text, setText] = useState<string | number>("");
  const [confirm, setConfirm] = useState<boolean>(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (step < 3 && text !== QuestionArray[step].password) {
      setConfirm(true);
      return;
    } else {
      setConfirm(false);
    }

    if (step > 2) {
      router.push("/");
      localStorage.setItem("config-flag", "pass");
      return;
    }

    setStep(step + 1);
    setText("");
  };
  return (
    <Wrapper>
      <progress value={step * 50} max={100} />
      <span>{step < 3 && QuestionArray[step].question}</span>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="답을 입력해주세요"
          value={text}
          onChange={handleChange}
        />
        {confirm && <ConfirmText>다시 생각해보세요..</ConfirmText>}
        <input type="button" value="다음" onClick={handleClick} />
      </Form>
    </Wrapper>
  );
}

export default Steps;

const ConfirmText = styled.span`
  color: red;
`;
