import "../styles/globals.css";
import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import Header from "../components/header";
import { RecoilRoot } from "recoil";

declare global {
  interface Window {
    kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [name, setName] = useState<string | null>("");
  const [flag, setFlag] = useState<string | null>("");

  useEffect(() => {
    const userName = localStorage.getItem("jjupjjup-user-name");
    const flag = localStorage.getItem("config-flag");

    setName(userName);
    setFlag(flag);
  }, []);

  return (
    <RecoilRoot>
      {!!name && !!flag && <Header />}
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
