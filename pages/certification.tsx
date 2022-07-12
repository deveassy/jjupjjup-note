import React, { useState, useEffect, useMemo } from "react";

function Certification() {
  const [text, setText] = useState<string>("");
  const [disable, setDisable] = useState(false); // 버튼활성화 유무

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("jjupjjup-user-name", text);

    setText("");
  };

  // TODO: localStorage에 값이 있을 경우엔 버튼 비활성화시키기
  // useEffect(() => {
  //   if (localStorage.getItem("jjupjjup-user-name")?.length || !!text)
  //     return setDisable(true);
  // }, [text, disable]);

  return (
    <div>
      <div>
        <h2>HELLO</h2>
        <p>모임에 참석하시겠습니까?</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            value={text}
            onChange={handleChange}
          />
          <input type="button" value="참석하기" disabled={!disable} />
        </form>
      </div>
    </div>
  );
}

export default Certification;
