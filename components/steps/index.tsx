import React, { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { questionArr } from "../../recoil/atom";
import * as S from "./styles";

function Steps() {
  const [step, setStep] = useState<number>(0);
  const [text, setText] = useState<string | number>("");
  const [confirm, setConfirm] = useState<boolean>(false);

  // 인증페이지 스텝별 답이 저장된 state => 추후에 직접 설정할 수 있는 setter함수
  const [arr, setArr] = useRecoilState(questionArr);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (step < 3 && text !== arr[step].password) {
      setConfirm(true);
      return;
    } else {
      setConfirm(false);
    }

    if (step > 2) {
      localStorage.setItem("config-flag", "pass");
      router.push("/");
      return;
    }

    setStep(step + 1);
    setText("");
  };
  return (
    <S.Wrapper>
      <progress value={step * 50} max={100} />
      <span>{step < 3 && arr[step].question}</span>
      <S.Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="답을 입력해주세요"
          value={text}
          onChange={handleChange}
        />
        {confirm && <S.ConfirmText>다시 생각해보세요..</S.ConfirmText>}
        <input type="button" value="다음" onClick={handleClick} />
      </S.Form>
    </S.Wrapper>
  );
}

export default Steps;
