import { useState, useRef } from "react";
import styled from "styled-components";

function Memory() {
  const fileRef = useRef<HTMLInputElement>();
  const [file, setFile] = useState();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setFile(e.target.value);
  };
  return (
    <Container>
      <h1>Memory page</h1>
      <UploadButton>
        Upload
        <input
          type="file"
          // ref={fileRef}
          accept="image/*"
          onChange={handleUpload}
          style={{ display: "none" }}
        />
      </UploadButton>
      <h3>{file}</h3>
    </Container>
  );
}

export default Memory;

const Container = styled.div``;

const UploadButton = styled.label`
  padding: 5px 10px;
  background-color: yellowgreen;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;
